import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../lib';
import { LoginInput } from '../types.ts';

/**
 * This hook is used to log in to a user's account.
 *
 * It returns an object with the following properties:
 * - loading: A boolean, indicating whether the mutation is loading.
 * - error: An object that is populated when there is an error.
 * - login: A method that is called to log in the user.
 *
 * Login explained:
 *  - When login is called with the correct credentials, it adds an
 *    access_token to the local storage. (NOT SAFE, but straightforward).
 *  - If it fails, then error will be populated with some properties (see ApolloError)
 *
 */
export function useLogin() {
  const [mutation, { loading, error }] = useMutation<
    { login: string },
    { payload: LoginInput }
  >(LOGIN);

  const logIn = async (username: string, password: string) => {
    const result = await mutation({
      variables: {
        payload: {
          username,
          password,
        },
      },
    });

    // we are storing the access token in local storage
    if (result.data) {
      // store the access_token to local storage
      window.localStorage.setItem('access_token', result.data.login);
      return true;
    } else {
      return false;
    }
  };

  return { loading, error, logIn };
}
