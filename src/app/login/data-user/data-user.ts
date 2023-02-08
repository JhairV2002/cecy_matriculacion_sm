import { Catalogue } from "src/app/feature/combobox-publicity/catalogue";

export interface DataUser{
  id: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  fechaNacimiento: Date;
  direccion: string;
  convencional: string;
  celular: string;
  email: string;
  sexoId: number;
  institucionId: number;
  etniaId: number;
  tipoPersonaId: number;
  instruccionId: number;
}
