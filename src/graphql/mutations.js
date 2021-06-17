/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
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
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
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
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
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
