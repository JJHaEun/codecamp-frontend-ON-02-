import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      price
      remarks
      tags
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
      }
    }
  }
`;
export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
        _id
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
      }
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      pickedCount
      tags
      images
      seller {
        _id
        name
        email
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        email
        name
      }
      buyer {
        _id
        email
        name
      }
      createdAt
    }
  }
`;
