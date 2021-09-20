import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';

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
