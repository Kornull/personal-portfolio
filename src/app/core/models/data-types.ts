import { Tag } from './tags';

export interface ProjectInfo {
  id: number;
  tech: string;
  title: string;
  info: string;
  image: string[];
  link: string;
  github: string;
  stack: Tag[];
  'full-stack': string[];
  warn?: string;
}
