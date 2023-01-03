export interface Student {
  id: number;
  numMatricula: string;
  estadoMatricula: 'En proceso' | 'Anulado' | 'Validado';
  nombre: string;
  apellido: string;
  genero: 'Masculino' | 'Femenino';
  edad: number;
  direccion: string;
  tipoEstudiante: 'Interno' | 'Externo';
  documentosRequeridos: string[];
  observaciones: string[];
  curso: Curso;
}

interface Curso {
  id: number;
  nombre: string;
  responsable: string;
  cupos: number;
  requisitos: string[];
  gratuito: boolean;
}
