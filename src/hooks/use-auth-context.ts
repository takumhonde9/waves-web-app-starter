import { useContext } from 'react';
import { AuthContext } from '../contexts';

/**
 * Allows you to hook into the auth context.
 */
export function useAuthContext() {
  return useContext(AuthContext);
}
