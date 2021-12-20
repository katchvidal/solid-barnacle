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

export const GET_USER = gql`
  query GetUser($getUserId: ID, $username: String) {
    getUser(id: $getUserId, username: $username) {
      name
      username
      email
      avatar
      id
      siteWeb
      description
    }
  }
`;
