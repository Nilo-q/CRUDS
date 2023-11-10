import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoDto } from './create-photo.dto';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {
  name?: string;
  description?: string;
  filename?: string;
  views?: number;
  isPublished?: boolean;
}
