import { GetQueryInterface } from 'interfaces';

export interface AssetHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AssetHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
