import React, { createContext, useState } from 'react';
import { IAuthContext } from './types';
import { IMe, GenericProps } from '../../types';
import { generateIntMaxedAt, voidFunction } from '../../utilities';

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: voidFunction,
});

function AuthProvider({ children }: GenericProps) {
  const [user, setUser] = useState<IMe | null>({
    id: generateIntMaxedAt(20),
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
