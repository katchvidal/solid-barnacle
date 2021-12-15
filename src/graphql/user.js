import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation REGISTERUSER($input: UserInput) {
    register(input: $input) {
      id
      name
      username
      email
      password
      createAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`;
