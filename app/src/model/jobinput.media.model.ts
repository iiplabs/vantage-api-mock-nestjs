import { JobInputFile } from './jobinput.file.model';

export interface JobInputMedia {
  Identifier: string;
  Data: string;
  Description: string;
  Files: JobInputFile[];
  Name: string;
}