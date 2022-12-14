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
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks

      useditemAddress {
        _id
        zipcode
        address
      }
      seller {
        _id
        email
        name
      }
    }
  }
`;

export const FETCH_USED_ITEM_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      price
      seller {
        _id
        email
        name
      }
    }
  }
`;
export const FETCH_USED_ITEMS_COUNT_IBOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
