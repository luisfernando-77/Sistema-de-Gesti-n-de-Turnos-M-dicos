import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Turno } from '../../turnos/entities/turno.entity';

@Entity('pacientes')
export class Paciente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  documento: string;

  @Column()
  telefono: string;

  @OneToMany(() => Turno, turno => turno.paciente)
  turnos: Turno[];
}