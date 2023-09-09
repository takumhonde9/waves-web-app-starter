import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($payload: LoginInput!) {
    login(payload: $payload)
  }
`;
