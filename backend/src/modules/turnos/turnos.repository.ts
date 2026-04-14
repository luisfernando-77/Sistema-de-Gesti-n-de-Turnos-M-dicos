import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TurnosRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.turno.findMany({
      include: {
        paciente: true,
        medico: true,
        consultorio: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.turno.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.turno.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.turno.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.turno.delete({
      where: { id },
    });
  }
}