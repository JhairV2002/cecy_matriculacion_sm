export interface Course {
  id: number;
  title: string;
  description: string;
  responsables: string[];
  schedule: string[];
  requirements: string[];
  content: string[];
  preRequirements: string[];
}
