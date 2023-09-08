import { useContext } from 'react';
import { TabsContext } from './context';

export function useTabsContext() {
  return useContext(TabsContext);
}
