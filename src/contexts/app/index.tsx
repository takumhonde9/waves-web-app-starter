import { createContext } from 'react';
import { IAppContext, AppProviderProps } from './types';

// [Optional] Extend context values: Add baseUrl
// [Optional] Update IAppContext as well.
const AppContext = createContext<IAppContext>({
  authorName: '',
});

// [Optional] Extend component props: Add baseUrl

function AppProvider({ children, authorName }: AppProviderProps) {
  return (
    <AppContext.Provider value={{ authorName }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
