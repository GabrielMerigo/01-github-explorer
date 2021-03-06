import { createContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../services/api';
import { setCookie } from 'nookies';

type User = {
  email: string;
  permissions:  string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    
    
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try{
      const response = await api.post('sessions', {
        email, 
        password
      });
  
      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, 'next-auth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/"
      });

      setCookie(undefined, 'next-auth.token', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/"
      });

      setUser({
        email,
        permissions,
        roles
      });
    }catch(err){
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}