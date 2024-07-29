import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Rate } from './entities/rate.entity';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports:[TypeOrmModule.forFeature([Student,Rate]), JoiPipeModule],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
