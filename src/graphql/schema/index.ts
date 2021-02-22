import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Block {
    hash: String!
    time: Int!
    height: Int!
    size: Int!
    block_index: Int!
    prev_block: Int!
    tx: [transaction]
  }

  type transaction {
    hash: Int!
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
