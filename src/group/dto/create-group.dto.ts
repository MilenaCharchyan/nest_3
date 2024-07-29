import { ApiProperty } from "@nestjs/swagger"
import * as Joi from "joi"
import { JoiSchema } from "nestjs-joi"

export class CreateGroupDto {
    @ApiProperty({default:"group1"})
    @JoiSchema(Joi.string().required())
    name:string

    @ApiProperty({default:6})
    @JoiSchema(Joi.number().integer().min(1).required())
    count:number
    
    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).required())
    teacherId:number

}
