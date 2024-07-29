import { Student } from "src/student/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rate {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    rate:number

    @ManyToOne(type=>Student,s=>s.rating,{
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
    })
    studnet:Student

}
