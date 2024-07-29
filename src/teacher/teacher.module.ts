import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports:[TypeOrmModule.forFeature([Teacher]),JoiPipeModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
