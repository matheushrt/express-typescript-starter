import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Block {
    hash: String!
    time: Int!
    height: Int!
    size: Int!
    block_index: Int!
    prev_block: String!
    tx: [transaction]
  }

  type transaction {
    hash: String!
    size: Int!
    fee: Int!
    balance: Int!
    time: Int!
  }

  type Query {
    blocks: [Block]
    blockByID(id: ID!): Block
  }
`;

export default typeDefs;
