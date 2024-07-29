import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rate } from './entities/rate.entity';
import { Student } from 'src/student/entities/student.entity';

@Injectable()
export class RateService {
  constructor (
    @InjectRepository(Student) private studentRepository:Repository<Student>,
    @InjectRepository(Rate) private rateRepository:Repository<Rate>,
  ){}
  create(createRateDto: CreateRateDto) {
    return 'This action adds a new rate';
  }

  findAll() {
    return `This action returns all rate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rate`;
  }

  update(id: number, updateRateDto: UpdateRateDto) {
    return `This action updates a #${id} rate`;
  }

  remove(id: number) {
    return `This action removes a #${id} rate`;
  }
}
