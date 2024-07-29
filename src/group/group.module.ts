import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Group } from './entities/group.entity';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports:[TypeOrmModule.forFeature([Teacher,Group]), JoiPipeModule],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
