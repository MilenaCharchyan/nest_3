import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @ApiProperty({default:"anna"})
    @JoiSchema(Joi.string().optional())
    name:string

    @ApiProperty({default:"anyan"})
    @JoiSchema(Joi.string().optional())
    surname:string


    @ApiProperty({default:"an@gmail.com"})
    @JoiSchema(Joi.string().email().optional())
    email:string


    @ApiProperty({default:"...."})
    @JoiSchema(Joi.string().optional())
    password:string

    @ApiProperty({default:18})
    @JoiSchema(Joi.number().integer().min(18).optional())
    age:number

    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).optional())
    groupId:number
}
