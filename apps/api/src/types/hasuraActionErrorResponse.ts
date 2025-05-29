// Reference: https://hasura.io/docs/2.0/actions/action-handlers/#returning-an-error-response

export interface HasuraActionErrorResponse {
  message: string;
  extensions?: {
    code?: string;
    [key: string]: string | undefined;
  };
}
