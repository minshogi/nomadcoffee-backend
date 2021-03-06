import { gql } from "apollo-server";

export default gql`
    type User {
        id: String!
        username: String!
        email: String!
        name: String!
        location: String!
        avatarURL: String
        githubUsername: String
    }
    
    type mutationResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        createAccount(
        username: String!
        email: String!
        name: String!
        location: String!
        avatarURL: String
        githubUsername: String
        password: String!
        ): mutationResult
    }

    type Query {
       seeProfile(username: String!): User 
    }
`;
