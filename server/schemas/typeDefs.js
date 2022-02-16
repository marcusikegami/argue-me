const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID,
        username: String,
        email: String,
        posts: [Post]
    }

    type Post {
        _id: ID
        opinion: String
        arument: String
        author: ID
    }

    type Comment {
        _id: ID
        argument: String
        for: Boolean
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
        addUser(username: String, email: String!, password: String!): Auth
        addArgument(opinion: String!, argument: String!): Argument
        AddComment(argument: String!, for: Boolean!): Argument
        login(email: String!, passoword: String!): Auth
    }
`;

module.exports = typeDefs;