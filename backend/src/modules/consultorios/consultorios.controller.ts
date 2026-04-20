import { Controller, Get } from '@nestjs/common';

@Controller('consultorios')
export class ConsultoriosController {

  @Get()
  findAll() {
    return {
      success: true,
      data: 'Listado de consultorios'
    };
  }

}