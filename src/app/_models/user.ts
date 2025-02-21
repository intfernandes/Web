import { Account } from './account';
import { Address } from './address';
import { Photo } from './photo';

export interface User {
  domainId: string;
  domain: any;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  passwordUpdate: any;
  age: any;
  dateOfBirth: any;
  lastActiveAt: any;
  gender: string;
  photos: Photo[];
  addressId: string;
  address: Address;
  orders: any[];
  accounts: Account[];
  currentAccount: string;
  isDomainResponsible: boolean;
  token: string;
  refreshTokens: any[];
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}
