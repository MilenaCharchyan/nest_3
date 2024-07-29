import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    @ApiProperty({default:"anna"})
    @JoiSchema(Joi.string().optional())
    name:string

    @ApiProperty({default:"anyan"})
    @JoiSchema(Joi.string().optional())
    surname:string


    @ApiProperty({default:"an@gmail.com"})
    @JoiSchema(Joi.string().email().optional())
    email:string


    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(18).optional())
    age:number
}
