import { Controller, Get } from '@nestjs/common';

@Controller('especialidades')
export class EspecialidadesController {

  @Get()
  findAll() {
    return {
      success: true,
      data: 'Listado de especialidades'
    };
  }

}