import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: ID,
        username: String,
        email: String,
        arguments: [Argument]
    }

    type Argument {
        _id: ID
        opinion: String
        argument: String
        author: String
        createdAt: String
        comments: [Comment]
    }

    type Comment {
        argumentId: ID
        _id: ID
        commentBody: String
        agree: Boolean
        author: ID
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        arguments(username: String): [Argument]
        argument(_id: ID!): Argument
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addArgument(opinion: String!, argument: String!): Argument
        addComment(argumentId: ID!, commentBody: String!, agree: Boolean!): Argument
        login(email: String!, password: String!): Auth
    }
`;

export default typeDefs;