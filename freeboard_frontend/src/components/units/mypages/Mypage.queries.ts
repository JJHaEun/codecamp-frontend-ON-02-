import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      useditem {
        _id
        name
        price
        images
        buyer {
          _id
          email
          name
        }
        seller {
          _id
          email
          name
        }
        user {
          _id
          email
          name
          userPoint {
            _id
            amount
          }
        }
      }
    }
  }
`;
