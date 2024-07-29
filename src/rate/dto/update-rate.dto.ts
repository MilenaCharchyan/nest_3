import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRateDto } from './create-rate.dto';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateRateDto extends PartialType(CreateRateDto) {
        

    @ApiProperty({default:0})
    @JoiSchema(Joi.number().integer().min(0).max(10).required())
    rate:number

    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).required())
    studentId:number
}
