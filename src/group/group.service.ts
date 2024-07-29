import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Injectable()
export class GroupService {

  constructor (
    @InjectRepository(Teacher) private teacherRepository:Repository<Teacher>,
    @InjectRepository(Group) private groupRepository:Repository<Group>,
  ){}


  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
