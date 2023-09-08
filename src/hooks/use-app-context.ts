import { useContext } from 'react';
import { AppContext } from '../contexts';

/*
 * Allows you to hook into the app context.
 */
export function useAppContext() {
  return useContext(AppContext);
}
