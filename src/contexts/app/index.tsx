import { createContext } from 'react';
import { IAppContext, AppProviderProps } from './types';

const AppContext = createContext<IAppContext>({
  authorName: '',
});

function AppProvider({ children, authorName }: AppProviderProps) {
  return (
    <AppContext.Provider value={{ authorName }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
