import { Photo } from './photo';

export interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  age: number;
  photoUrl: string;
  createdAt: string;
  lastActiveAt: string;
  gender: string;
  city: string;
  country: string;
  photos: Photo[];
}
