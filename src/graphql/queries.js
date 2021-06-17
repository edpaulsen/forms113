/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      account_id
      form_id
      form_name
      location
      first_name
      last_name
      email
      phone
      fields
      createdAt
      updatedAt
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        account_id
        form_id
        form_name
        location
        first_name
        last_name
        email
        phone
        fields
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
