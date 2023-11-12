import { GetQueryInterface } from 'interfaces';

export interface WalletInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WalletGetQueryInterface extends GetQueryInterface {
  id?: string;
}
