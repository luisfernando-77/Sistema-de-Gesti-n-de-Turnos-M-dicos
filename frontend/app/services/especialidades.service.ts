import { apiGet, apiPost, apiPut, apiDelete } from '@/app/lib/api';
import type { Especialidad } from '@/app/interfaces/especialidad.interface';

export const especialidadesService = {
  findAll: () => apiGet<Especialidad[]>('/especialidades'),

  findOne: (id: number) =>
    apiGet<Especialidad>(`/especialidades/${id}`),

  create: (data: Partial<Especialidad>) =>
    apiPost<Especialidad>('/especialidades', data),

  update: (id: number, data: Partial<Especialidad>) =>
    apiPut<Especialidad>(`/especialidades/${id}`, data),

  remove: (id: number) =>
    apiDelete(`/especialidades/${id}`),
};