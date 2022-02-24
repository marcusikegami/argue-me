import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

export const ADD_ARGUMENT = gql`
mutation addArgument($opinion: String!, $argument: String!) {
  addArgument(opinion: $opinion, argument: $argument) {
    _id
    opinion
    argument
    author
  }
}
`;
