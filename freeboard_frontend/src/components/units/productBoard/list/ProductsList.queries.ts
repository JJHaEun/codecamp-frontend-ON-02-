import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      seller {
        _id
        name
        email
      }
      createdAt
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      buyer {
        _id
        email
        name
        createdAt
      }
    }
  }
`;
