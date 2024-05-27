import { JobInputAttachment } from './jobinput.attachment.model';
import { JobInputLabel } from './jobinput.label.model';
import { JobInputMedia } from './jobinput.media.model';
import { JobInputVariable } from './jobinput.variable.model';

export interface JobInput {
  Attachments: JobInputAttachment[],
  JobName: string,
  Labels: JobInputLabel[],
  Medias: JobInputMedia[],
  Priority: number,
  Variables: JobInputVariable[]
}