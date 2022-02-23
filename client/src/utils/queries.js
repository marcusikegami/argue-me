import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
    User {
        _id
        username
        email
        arguments
    }
}
`;