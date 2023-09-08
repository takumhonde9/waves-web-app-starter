import { gql } from '@apollo/client';

export const CLEAR_CART = gql`
  mutation clearCart {
    clearCart {
      success
      message
    }
  }
`;
