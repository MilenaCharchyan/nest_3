import { Module } from '@nestjs/common';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    
    GroupModule, StudentModule, TeacherModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_3',
      entities: [],
      synchronize: true,
    }),
    RateModule,
  
  ],
})
export class AppModule {}
