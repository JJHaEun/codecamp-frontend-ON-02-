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
export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
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
      soldAt
      createdAt
    }
  }
`;
