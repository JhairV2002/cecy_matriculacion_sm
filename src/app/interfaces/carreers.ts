export interface Carreras {
  id: number;
  nombre: string;
  cursos: Curso[];
}

export interface Curso {
  id: number;
  nombre: string;
  gratis: boolean;
  cupos: number;
  estado: string;
  duracion?: number;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  instructores: Instructores[];
  requerimientos: Requerimiento[];
  preRequisitos: Requerimiento[];
  contenidos: Requerimiento[];
  horarios: Horario[];
}

interface Horario {
  id: number;
  dias: Requerimiento[];
  horaInicio: Requerimiento[];
  horaFin: Requerimiento[];
}

interface Requerimiento {
  id: number;
  descripcion: string;
}

interface Instructores {
  id: number;
  nombreApellidos: string;
  avatarUrl: string;
}
