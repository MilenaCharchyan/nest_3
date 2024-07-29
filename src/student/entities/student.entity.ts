import { Group } from "src/group/entities/group.entity"
import { Rate } from "src/rate/entities/rate.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    surname:string
    @Column()
    email:string
    @Column()
    age:number
    @Column()
    password:string


    @OneToMany(type=>Rate,r=>r.studnet )
    rating:Rate[]


    @ManyToOne(type=>Group,g=>g.students,{
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
    })
    group:Group

}
