interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Fund Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Fund Owner', 'Asset Manager'],
  tenantName: 'Company',
  applicationName: 'The Portal Fund',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage user profile',
    'View price trend',
    'View wallet transaction',
    'View asset history',
    'Manage transactions',
    'View balance',
    'View price movement',
    'View asset',
    'Manage wallet',
    'Manage user',
    'View company',
  ],
  ownerAbilities: ['Manage user profile', 'Manage price trend', 'Manage wallet transaction', 'Manage asset history'],
  getQuoteUrl: 'https://app.roq.ai/proposal/20bb2557-54f2-47dc-85fa-ad9f30cb74d3',
};
