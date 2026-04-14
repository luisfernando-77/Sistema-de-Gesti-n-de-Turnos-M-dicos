import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ConsultoriosRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.consultorio.findMany({
      include: { turnos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.consultorio.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.consultorio.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.consultorio.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.consultorio.delete({
      where: { id },
    });
  }
}