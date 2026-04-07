# 🏥 Sistema de Gestión de Turnos Médicos

> Proyecto académico — Programación Web 2026A

---

## 📌 Descripción

El **Sistema de Gestión de Turnos Médicos** es una aplicación full-stack diseñada para administrar la operación de un centro médico, permitiendo gestionar pacientes, médicos, especialidades, horarios y turnos de atención.

El sistema permite:
- Registrar y administrar pacientes y médicos  
- Configurar horarios disponibles  
- Solicitar y gestionar turnos médicos  
- Llevar control de atención  
- Generar reportes operativos  

---

## 🧱 Stack Tecnológico

- **Backend:** NestJS  
- **Frontend:** Next.js  
- **Base de Datos:** PostgreSQL  
- **ORM:** Prisma  
- **Contenedores:** Docker  

---

## 🚀 Arquitectura

El backend sigue una arquitectura en capas:

```
Controller → Service → Repository
```

---

## 📅 Plan de Releases

### 🔹 Release 1 — Backend + Frontend Base  
📆 Cierre: 17 de abril de 2026  

**Objetivo:** API REST completa + CRUDs + frontend básico  

#### Sprint 1 — Infraestructura y entidades base
- Docker + Prisma  
- CRUD: Pacientes, Médicos  

#### Sprint 2 — Entidades médicas
- Especialidades  
- Consultorios  
- Horarios disponibles  

#### Sprint 3 — Turnos + Frontend base
- Solicitud y gestión de turnos  
- Estados de turno  
- Formularios y listados  

---

### 🔹 Release 2 — Integración y Reportes  
📆 Cierre: 22 de mayo de 2026  

**Objetivo:** Integración completa + reportes  

#### Sprint 4 — Frontend avanzado
- Navegación completa  
- Formularios dinámicos  
- Agenda del médico  

#### Sprint 5 — Reportes y cierre
- Historial de pacientes  
- Reportes de turnos  
- Métricas y pruebas finales  

---

## 📖 Historias de Usuario

El sistema incluye 10 historias de usuario principales:

| Código | Descripción |
|--------|------------|
| HU-01 | Gestión de Pacientes |
| HU-02 | Gestión de Médicos |
| HU-03 | Gestión de Especialidades |
| HU-04 | Gestión de Consultorios |
| HU-05 | Configuración de Horarios |
| HU-06 | Solicitud de Turnos |
| HU-07 | Gestión de Turnos |
| HU-08 | Registro de Atención |
| HU-09 | Agenda del Médico |
| HU-10 | Reportes de Turnos |

---

## ✅ Definition of Done (DoD)

### 🔧 Backend
- Arquitectura en capas implementada  
- DTOs con validaciones  
- Manejo de errores HTTP  
- Validaciones de negocio:
  - Disponibilidad del médico  
  - No duplicidad de turnos  
  - Existencia de entidades  
- Estados del turno correctamente gestionados  
- Pruebas con Postman  

---

### 🎨 Frontend
- Componentes reutilizables  
- Consumo de API  
- Estados: loading, éxito y error  
- Formularios validados  
- Selects dinámicos (especialidad → médico → horario)  
- Diseño responsivo  

---

### ⚙️ Infraestructura
- Proyecto versionado en GitHub  
- Docker funcionando (`docker compose up`)  
- Migraciones Prisma aplicadas  
- Sin errores críticos  

---

## 🗃️ Modelo de Datos

### Relaciones principales

- Paciente → Turno (1:N)  
- Médico → Turno (1:N)  
- Especialidad → Médico (1:N)  
- Médico → HorarioDisponible (1:N)  

---

### Entidades principales

**Paciente**
- id, nombres, apellidos  
- documentoIdentidad (único)  
- eps, tipoSangre, teléfono, correo  

**Médico**
- id, nombres, apellidos  
- registro profesional (único)  
- especialidadId, consultorioId  

**Especialidad**
- id, nombre (único), descripción  

**Consultorio**
- id, nombre (único), ubicación  

**HorarioDisponible**
- medicoId, día, horaInicio, horaFin  

**Turno**
- pacienteId, medicoId, fecha, hora  
- estado (pendiente, confirmado, cancelado, atendido, no asistido)  

---

## 📊 Funcionalidades Clave

- ✔ CRUD completo de entidades  
- ✔ Gestión de turnos médicos  
- ✔ Validación de disponibilidad  
- ✔ Agenda del médico  
- ✔ Reportes por fechas  
- ✔ Métricas de atención  

---

## 🐳 Ejecución del Proyecto

```bash
# Clonar repositorio
git clone  https://github.com/luisfernando-77/Grupo8_Perez_Mu-oz.git

# Entrar al proyecto
cd proyecto

# Levantar servicios
docker compose up
```

---

## 📌 Estado del Proyecto

- [x] Plan de releases  
- [x] Historias de usuario  
- [x] Modelo de datos  
- [x] Definition of Done  
- [ ] Implementación en progreso  

---

## 🔗 Repositorio

 https://github.com/luisfernando-77/Grupo8_Perez_Mu-oz.git
