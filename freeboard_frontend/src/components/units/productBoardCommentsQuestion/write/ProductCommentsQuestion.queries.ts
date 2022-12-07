import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      useditem {
        _id
        name
        remarks
        contents
        price
        tags
        images
        pickedCount
        useditemAddress {
          _id
          zipcode
          address
          addressDetail
          createdAt
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
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditem {
        _id
        name
        remarks
        contents
        price
        tags
        images
        pickedCount
        useditemAddress {
          _id
          zipcode
          address
          addressDetail
          createdAt
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
