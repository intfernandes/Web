import { Photo } from './photo';

export interface Member {
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
