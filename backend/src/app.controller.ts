import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ✅ Ruta principal
  @Get()
  getHome() {
    return {
      success: true,
      message: 'API Sistema de Gestión de Turnos Médicos funcionando 🚀',
      statusCode: 200,
    };
  }

  // ✅ Endpoint ejemplo
  @Get('test')
  testEndpoint() {
    return {
      success: true,
      message: 'Endpoint de prueba activo',
      timestamp: new Date(),
    };
  }

  // ✅ Health Check (muy usado en Docker y producción)
  @Get('health')
  healthCheck() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date(),
    };
  }
}