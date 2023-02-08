export interface Curso {
  id: number;
  nombre: string;
  gratis: boolean;
  cupos: number;
  estado: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  fotoUrl: string;
  instructores: Instructore[];
  requerimientos: any[];
  preRequisitos: any[];
  contenidos: Contenido[];
  horarios: any[];
}

interface Contenido {
  id: number;
  descripcion: string;
}

interface Instructore {
  id: number;
  nombreApellidos: string;
  avatarUrl: string;
}
