import { createContext, useState } from 'react';
import { ITabContext, TabsProps } from './types';
import { voidFunction } from '../../utilities';

const TabsContext = createContext<ITabContext>({
  current: '',
  setCurrent: voidFunction,
});

function TabsProvider({ children, defaultValue }: TabsProps) {
  const [current, setCurrent] = useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{ setCurrent, current }}>
      {children}
    </TabsContext.Provider>
  );
}

export { TabsProvider, TabsContext };
