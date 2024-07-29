import { ApiProperty } from "@nestjs/swagger"
import * as Joi from "joi"
import { JoiSchema } from "nestjs-joi"

export class CreateRateDto {
    

    @ApiProperty({default:0})
    @JoiSchema(Joi.number().integer().min(0).max(10).required())
    rate:number

    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).required())
    studentId:number
}
