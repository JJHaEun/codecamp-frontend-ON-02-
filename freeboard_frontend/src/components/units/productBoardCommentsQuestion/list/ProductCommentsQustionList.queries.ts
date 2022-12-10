import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents

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

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
