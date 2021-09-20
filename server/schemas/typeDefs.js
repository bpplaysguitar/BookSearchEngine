const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  } 

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, savedBooks: [bookSchema]): User
    saveBook(_id: String!, bookNum: Int!): User
    deleteBook(_id: String!): User
  }
`;

module.exports = typeDefs;
