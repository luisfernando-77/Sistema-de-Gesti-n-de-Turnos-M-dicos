import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({ where: { id } });
  }

  create(data: CreatePacienteDto) {
    return this.prisma.paciente.create({ data });
  }

  update(id: number, data: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}