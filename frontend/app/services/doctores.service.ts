import { apiGet, apiPost, apiPut, apiDelete } from '@/app/lib/api';
import type { Doctor } from '@/app/interfaces/doctor.interface';

export const doctoresService = {
  findAll: () => apiGet<Doctor[]>('/doctores'),

  findOne: (id: number) =>
    apiGet<Doctor>(`/doctores/${id}`),

  create: (data: Partial<Doctor>) =>
    apiPost<Doctor>('/doctores', data),

  update: (id: number, data: Partial<Doctor>) =>
    apiPut<Doctor>(`/doctores/${id}`, data),

  remove: (id: number) =>
    apiDelete(`/doctores/${id}`),
};