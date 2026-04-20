import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medico } from '../../medicos/entities/medico.entity';

@Entity('consultorios')
export class Consultorio {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ubicacion: string;

  @OneToMany(() => Medico, medico => medico.consultorio)
  medicos: Medico[];
}