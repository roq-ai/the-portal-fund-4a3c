import { GetQueryInterface } from 'interfaces';

export interface PriceMovementInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PriceMovementGetQueryInterface extends GetQueryInterface {
  id?: string;
}
