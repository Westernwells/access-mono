'use client';

import {useEffect, useState} from 'react';
import type {NormalizedCacheObject} from '@apollo/client';
import {from, HttpLink, split} from '@apollo/client';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {getMainDefinition} from '@apollo/client/utilities';
import {createClient} from 'graphql-ws';
import {useUser} from './UserContext';

function makeClient(token: string | null): ApolloClient<NormalizedCacheObject> {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT ?? '',
      connectionParams: () => {
        const headers: Record<string, string> = {
          accept: 'application/json',
          'content-type': 'application/json',
        };

        if (token) {
          headers.authorization = `Bearer ${token}`;
        }

        return {headers};
      },
    }),
  );

  const headers: Record<string, string> = {
    accept: 'application/json',
    'content-type': 'application/json',
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT ?? '',
    fetchOptions: {cache: 'no-store'},
    headers,
  });

  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);

      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([splitLink]),
  });
}

export function ApolloWrapper({children}: {children: React.ReactNode}) {
  const {jwtToken} = useUser();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>(
    makeClient(jwtToken),
  );

  useEffect(() => {
    const newClient = makeClient(jwtToken);
    setClient(newClient);
  }, [jwtToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
