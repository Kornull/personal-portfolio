import { Tag } from './tags';

export interface Projects {
  projects: ProjectInfo[];
}

export interface ProjectInfo {
  id: string;
  tech: string;
  title: string;
  'full-info': string;
  image: string;
  link: string;
  github: string;
  stack: Tag[];
  'full-stack': string[];
}
