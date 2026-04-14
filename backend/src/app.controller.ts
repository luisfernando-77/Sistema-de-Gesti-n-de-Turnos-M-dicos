import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getRoot() {
    return {
      status: 'API Turnos Médicos funcionando 🚀',
    };
  }

  @Get('health')
  health() {
    return {
      status: 'ok',
    };
  }
}