import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { PacientesModule } from './modules/pacientes/pacientes.module';
import { MedicosModule } from './modules/medicos/medicos.module';
import { EspecialidadesModule } from './modules/especialidades/especialidades.module';
import { ConsultoriosModule } from './modules/consultorios/consultorios.module';
import { TurnosModule } from './modules/turnos/turnos.module';

@Module({
  imports: [
    PrismaModule,
    PacientesModule,
    MedicosModule,
    EspecialidadesModule,
    ConsultoriosModule,
    TurnosModule,
  ],
})
export class AppModule {}