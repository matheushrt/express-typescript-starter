import { logger } from '../../config/logger';

const resolvers = {
  Query: {
    blocks: async (_, __, { dataSources }) => {
      try {
        return (await dataSources.blockchainAPI.getBlocks())?.blocks;
      } catch (error) {
        logger.error(error);
      }
    },
    blockByID: async (_, { id }, { dataSources }) => {
      try {
        return await dataSources.blockchainAPI.getBlockDetails(id);
      } catch (error) {
        logger.error(error);
      }
    },
  },
};

export default resolvers;
