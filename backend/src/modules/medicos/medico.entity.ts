import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm';

import { Especialidad } from '../../especialidades/entities/especialidad.entity';
import { Consultorio } from '../../consultorios/entities/consultorio.entity';
import { Turno } from '../../turnos/entities/turno.entity';

@Entity('medicos')
export class Medico {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  telefono: string;

  @ManyToOne(() => Especialidad, e => e.medicos)
  especialidad: Especialidad;

  @ManyToOne(() => Consultorio, c => c.medicos)
  consultorio: Consultorio;

  @OneToMany(() => Turno, turno => turno.medico)
  turnos: Turno[];
}