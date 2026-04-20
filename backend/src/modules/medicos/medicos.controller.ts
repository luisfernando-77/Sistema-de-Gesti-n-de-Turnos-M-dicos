import { Controller, Get } from '@nestjs/common';

@Controller('medicos')
export class MedicosController {

  @Get()
  findAll() {
    return {
      success: true,
      data: 'Listado de médicos'
    };
  }

}
