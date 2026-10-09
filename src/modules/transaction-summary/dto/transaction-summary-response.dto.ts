// HABI | HU-04 / SCRUM-33 | Backend SCRUM-55
// AVANCE SIMULADO: archivo no funcional.
//
// Contrato de salida propuesto.
// transactionId; property { id, description }; status { code, label };
// currentStage { code, label }; progressPercentage (0 a 100); updatedAt (ISO 8601);
// mainPendingItems [{ id, description, detailPath }];
// nextEvent { description, scheduledAt, detailPath } o null; detailPath.
// Las etiquetas permiten interpretar el estado sin depender de colores.
// Agregar campo faltante al contrato con el front --- campo permite null
