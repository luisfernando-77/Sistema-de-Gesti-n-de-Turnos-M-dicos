# 🎓 Sistema de Gestión de Turnos Médicos

> Proyecto full-stack guiado por el docente — Programación Web 2026A

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

---

## 📖 Descripción del Proyecto

El **Sistema de Gestión de Turnos Médicos** es una aplicación web que permite administrar la atención médica: pacientes, médicos, horarios, turnos y reportes.

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Backend | NestJS |
| Frontend | Next.js |
| Base de Datos | PostgreSQL |
| ORM | Prisma |
| Infraestructura | Docker |

---

## 🏗 Arquitectura

Cliente → Controller → Service → Repository → Prisma → PostgreSQL

---

## 📊 Modelo de Datos

Paciente        1 ──── N Turno  
Medico          1 ──── N Turno  
Especialidad    1 ──── N Medico  
Consultorio     1 ──── N Medico  
Horario         1 ──── N Turno  

---

## 🚀 Plan de Releases

### Release 1 — Backend + Frontend Base

📅 Cierre: 17 Abril 2026  

| Sprint | HUs |
|--------|-----|
| Sprint 1 | HU-01, HU-02 |
| Sprint 2 | HU-03, HU-04 |
| Sprint 3 | HU-05, HU-06 |

---

### Release 2 — Integración + Reportes

📅 Cierre: 22 Mayo 2026  

| Sprint | HUs |
|--------|-----|
| Sprint 4 | HU-07, HU-08 |
| Sprint 5 | HU-09, HU-10 |

---

## 📌 Historias de Usuario

| HU | Descripción |
|----|------------|
| HU-01 | Gestión de Pacientes |
| HU-02 | Gestión de Médicos |
| HU-03 | Gestión de Especialidades |
| HU-04 | Gestión de Consultorios |
| HU-05 | Configuración de Horarios |
| HU-06 | Solicitud de Turno |
| HU-07 | Gestión de Turnos |
| HU-08 | Registro de Atención |
| HU-09 | Agenda del Médico |
| HU-10 | Reportes |

---

## 📅 Cronograma

Sprint 1 → Pacientes y Médicos  
Sprint 2 → Especialidades y Consultorios  
Sprint 3 → Turnos y Horarios  
Sprint 4 → Frontend + Integración  
Sprint 5 → Reportes  

---

## ✅ Definition of Done (DoD)

### Backend
- [ ] Arquitectura en capas
- [ ] DTOs validados
- [ ] Manejo de errores
- [ ] Endpoints funcionales

### Frontend
- [ ] Formularios funcionales
- [ ] Consumo de API
- [ ] Manejo de estados

### Infraestructura
- [ ] Docker funcionando
- [ ] Base de datos conectada
- [ ] Proyecto ejecutable

---

## ⚙ Instalación

```bash
git clone https://github.com/luisfernando-77/Grupo8_Perez_Mu-oz.git
cd Grupo8_Perez_Mu-oz

docker compose up
