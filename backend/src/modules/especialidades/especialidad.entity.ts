import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medico } from '../../medicos/entities/medico.entity';

@Entity('especialidades')
export class Especialidad {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToMany(() => Medico, medico => medico.especialidad)
  medicos: Medico[];
}