import { Injectable } from '@nestjs/common';
import { PacientesRepository } from './pacientes.repository';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(private repo: PacientesRepository) {}

  findAll() { return this.repo.findAll(); }
  findOne(id: number) { return this.repo.findOne(id); }
  create(dto: CreatePacienteDto) { return this.repo.create(dto); }
  update(id: number, dto: UpdatePacienteDto) { return this.repo.update(id, dto); }
  remove(id: number) { return this.repo.remove(id); }
}