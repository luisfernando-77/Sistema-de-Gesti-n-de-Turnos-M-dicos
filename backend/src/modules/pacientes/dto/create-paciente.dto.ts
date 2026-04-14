import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}