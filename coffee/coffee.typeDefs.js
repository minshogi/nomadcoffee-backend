import { gql } from "apollo-server";

export default gql`
    type Coffee {
        id: Int!
        title: String!
        milk: Boolean!
    }

    type Query {
        coffees: [Coffee]
        coffee(id: Int!): Coffee
    }
    
    type Mutation {
        createCoffee(title: String!, milk: Boolean!): Coffee
    }
`;
