import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';

import { Medico } from '../../medicos/entities/medico.entity';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('turnos')
export class Turno {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Medico, medico => medico.turnos)
  medico: Medico;

  @ManyToOne(() => Paciente, paciente => paciente.turnos)
  paciente: Paciente;
}