import { apiGet, apiPost, apiPut, apiDelete } from '@/app/lib/api';
import type { Paciente } from '@/app/interfaces/paciente.interface';

export const pacientesService = {
  findAll: () => apiGet<Paciente[]>('/pacientes'),

  findOne: (id: number) =>
    apiGet<Paciente>(`/pacientes/${id}`),

  create: (data: Partial<Paciente>) =>
    apiPost<Paciente>('/pacientes', data),

  update: (id: number, data: Partial<Paciente>) =>
    apiPut<Paciente>(`/pacientes/${id}`, data),

  remove: (id: number) =>
    apiDelete(`/pacientes/${id}`),
};