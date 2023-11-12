import { GetQueryInterface } from 'interfaces';

export interface PriceTrendInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PriceTrendGetQueryInterface extends GetQueryInterface {
  id?: string;
}
