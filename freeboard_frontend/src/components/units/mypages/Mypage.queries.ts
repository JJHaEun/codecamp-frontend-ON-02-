import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      balance
      statusDetail
    }
  }
`;
// export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
//   query fetchPointTransactionsCountOfLoading {
//     fetchPointTransactionsCountOfLoading
//   }
// `;
