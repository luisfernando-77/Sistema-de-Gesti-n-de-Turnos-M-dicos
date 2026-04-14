import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EspecialidadesRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.especialidad.findMany({
      include: { medicos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.especialidad.findUnique({
      where: { id },
    });
  }

  create(data: { nombre: string }) {
    return this.prisma.especialidad.create({ data });
  }

  update(id: number, data: { nombre?: string }) {
    return this.prisma.especialidad.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.especialidad.delete({
      where: { id },
    });
  }
}