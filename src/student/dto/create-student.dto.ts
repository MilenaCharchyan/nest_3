import { ApiProperty } from "@nestjs/swagger"
import  * as Joi from "joi"
import { JoiSchema } from "nestjs-joi"

export class CreateStudentDto {
    @ApiProperty({default:"anna"})
    @JoiSchema(Joi.string().required())
    name:string

    @ApiProperty({default:"anyan"})
    @JoiSchema(Joi.string().required())
    surname:string


    @ApiProperty({default:"an@gmail.com"})
    @JoiSchema(Joi.string().email().required())
    email:string


    @ApiProperty({default:"...."})
    @JoiSchema(Joi.string().required())
    password:string

    @ApiProperty({default:18})
    @JoiSchema(Joi.number().integer().min(18).required())
    age:number

    @ApiProperty({default:1})
    @JoiSchema(Joi.number().integer().min(1).required())
    groupId:number

}
