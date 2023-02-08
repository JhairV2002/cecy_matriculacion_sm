export interface FormInscription {
  id: number;
  sponsoredCourse: boolean;
  institutionContact: string;
  userId?: number;
  courseId: number;
  otherCourses?: any;
  state?: any;
  publicity?: any;
  documents: Document[];
  observations: Observation[];
  personCecy: PersonCecy;
}

interface PersonCecy {
  id: number;
  cedula: string;
  nombres?: any;
  apellidos: string;
  fechaNacimiento?: any;
  direccion: string;
  convencional: string;
  celular: string;
  email?: any;
  aceptado: boolean;
  institucionId: number;
  sexoId: SexoId;
  etniaId: SexoId;
  tipoPersonaId: SexoId;
  instruccionId: SexoId;
}

interface SexoId {
  id: number;
  code: string;
  value: string;
}

export interface Observation {
  id?: number;
  description: string;
  fechaCreacion: string;
  fechaModificacion: string;
  completado: boolean;
}

interface Document {
  id: number;
  fechaSubida?: any;
  archivoUrl: string;
}
