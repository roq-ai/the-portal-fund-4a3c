import { GetQueryInterface } from 'interfaces';

export interface BalanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BalanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
