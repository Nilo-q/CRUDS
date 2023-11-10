/*eslint-disable */

import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
// import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotoService {
  
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async create(photo:Photo) {
    return this.photoRepository.save(photo);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async findOne(id: number) {
    return this.photoRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updatePhoto: Partial<Photo>) {
    return this.photoRepository.update(id, updatePhoto); 
  }
  
  async delete(id: number) {
    return this.photoRepository.delete(id);
  }
}
