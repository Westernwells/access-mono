import React, {createContext, useContext, useState, ReactNode} from 'react';
import type {Users} from '@/types/generated/graphql';

type ProvidedUser = Pick<Users, 'id' | 'email' | 'name' | 'phone' | 'role'>;

export interface UserContextType {
  user: ProvidedUser | null;
  jwtToken: string | null;
  setUser: (user: Users | null) => void;
  setJwtToken: (token: string | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({children}: UserProviderProps) {
  const [user, setUser] = useState<ProvidedUser | null>(null);
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  const logout = () => {
    setUser(null);
    setJwtToken(null);
  };

  const value: UserContextType = {
    user,
    jwtToken,
    setUser,
    setJwtToken,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
