import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    @ApiProperty({default:"group1"})
    @JoiSchema(Joi.string().optional())
    name:string

    @ApiProperty({default:6})
    @JoiSchema(Joi.number().integer().min(1).optional())
    count:number
    
    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).optional())
    teacherId:number
}
