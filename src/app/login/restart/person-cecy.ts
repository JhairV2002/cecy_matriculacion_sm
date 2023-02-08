import { Catalogue } from "src/app/feature/combobox-publicity/catalogue";

export interface PersonCecy {
  id: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  fechaNacimiento: Date;
  direccion: string;
  convencional: string;
  celular: string;
  email: string;
  sexoId: Catalogue;
  institucionId: number;
  etniaId: Catalogue;
  tipoPersonaId: Catalogue;
  instruccionId: Catalogue;
  aceptado: boolean;
}
