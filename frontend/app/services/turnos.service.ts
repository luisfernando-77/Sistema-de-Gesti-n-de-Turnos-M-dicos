import { apiGet, apiPost, apiPut, apiDelete } from '@/app/lib/api';
import type { Turno } from '@/app/interfaces/turno.interface';

export const turnosService = {
  findAll: () => apiGet<Turno[]>('/turnos'),

  findOne: (id: number) =>
    apiGet<Turno>(`/turnos/${id}`),

  create: (data: Partial<Turno>) =>
    apiPost<Turno>('/turnos', data),

  update: (id: number, data: Partial<Turno>) =>
    apiPut<Turno>(`/turnos/${id}`, data),

  remove: (id: number) =>
    apiDelete(`/turnos/${id}`),
};