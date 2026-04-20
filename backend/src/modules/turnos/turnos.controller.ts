import { Controller, Get } from '@nestjs/common';

@Controller('turnos')
export class TurnosController {

  @Get()
  findAll() {
    return {
      success: true,
      data: 'Listado de turnos'
    };
  }

}