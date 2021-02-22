export interface IBlock {
  ver: number;
  next_block: [];
  time: number;
  bits: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  main_chain: number;
  height: number;
  weight: number;
  tx: [];
  hash: number;
  prev_block: number;
  mrkl_root: number;
}

export interface ITransaction {
  hash: number;
  size: number;
  fee: number;
  balance: number;
  time: number;
}
