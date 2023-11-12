import { GetQueryInterface } from 'interfaces';

export interface WalletTransactionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WalletTransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
