import { RESTDataSource } from 'apollo-datasource-rest';
import { IBlock } from 'ts/interfaces';

type blockList = Pick<IBlock, 'height' | 'hash' | 'time'>;
type block = Pick<IBlock, 'size' | 'block_index' | 'prev_block'>;

class BlockchainAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://blockchain.info';
  }

  async getBlocks(): Promise<blockList[]> {
    return this.get('/blocks?format=json');
  }

  async getBlockDetails(hash: string): Promise<block> {
    return this.get(`/rawblock/${hash}`);
  }
}

export default BlockchainAPI;
