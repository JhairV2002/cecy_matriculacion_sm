import { PersonCecy } from "src/app/login/restart/person-cecy";
import { Catalogue } from "../combobox-publicity/catalogue";

export interface Inscription {
  id: number;
  userId: number;
  courseId: number;
  publicity: Catalogue;
  otherCourses: number;
  sponsoredCourse: boolean;
  institutionContact: string;
  state: Catalogue;
  personCecy: PersonCecy;
}
