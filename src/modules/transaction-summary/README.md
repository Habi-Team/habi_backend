# Resumen de transacción — avance simulado

Referencia: [HU-04 / SCRUM-33](https://eam-team-habi.atlassian.net/browse/SCRUM-33) y [backend SCRUM-55](https://eam-team-habi.atlassian.net/browse/SCRUM-55).

Este módulo es una estructura académica ficticia. No implementa NestJS, no expone endpoints, no consulta datos y no acredita la finalización de la historia ni de su tarea. Todos los archivos TypeScript contienen únicamente comentarios. Los JSON son ejemplos estáticos.

## Incorporación
Copiar la carpeta `transaction-summary` dentro de `src/modules/`. No instalar dependencias ni registrar el módulo en `app.module.ts`.

## Alcance representado
Inmueble, estado, etapa actual, avance, última actualización, pendientes principales, próximo evento y acceso al detalle. Controlador, servicio, repositorio, DTO, representación conceptual y mapper reservan responsabilidades para una implementación futura.

## Contrato propuesto, no implementado
`GET /transactions/:transactionId/summary`

Los campos y la ruta son una propuesta para esta simulación, no un contrato aprobado en Jira. Consultar `dto/` y `mocks/` para los ejemplos de éxito, ausencia de información y error. `scheduledAt` y `nextEvent` pueden ser null cuando no exista fecha o evento. `detailPath` representa una ruta de navegación propuesta para el frontend.

El 40 % es ilustrativo: no se calcula ni demuestra consistencia con hitos reales. Los códigos de estado y etapa son de ejemplo. El indicador `simulation` identifica los archivos de muestra y no es un requisito de Jira.

## Pendiente para un desarrollo real
Autenticación y autorización, validaciones, persistencia, reglas de avance acordadas, manejo HTTP de errores, integración con el frontend y pruebas. No se han ejecutado pruebas funcionales porque no existe implementación.

## Commit sugerido
`chore(SCRUM-55): agregar estructura simulada del resumen de transaccion`
