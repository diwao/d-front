import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function fetchUsers(): Promise<AxiosResponse<User[]>> {
  return apiClient.get('/users');
}

export async function fetchUser({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<User>> {
  return apiClient.get(`/users/${id}`);
}
