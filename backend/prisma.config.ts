import path from 'node:path';
import { defineConfig } from 'prisma/config';
import { config } from 'dotenv';

// cargar .env desde la raíz del proyecto
config({ path: path.join(__dirname, '..', '.env') });

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
});