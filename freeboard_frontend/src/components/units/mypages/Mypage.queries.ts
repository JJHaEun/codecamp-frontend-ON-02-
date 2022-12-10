import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      useditem {
        _id
        name
        buyer {
          _id
          email
          name
        }
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
      createdAt
    }
  }
`;
// export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
//   query fetchPointTransactionsCountOfLoading {
//     fetchPointTransactionsCountOfLoading
//   }
// `;
