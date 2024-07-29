import { Student } from "src/student/entities/student.entity"
import { Teacher } from "src/teacher/entities/teacher.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    count: number



    @ManyToOne(type => Teacher, t => t.groups, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    teacher: Teacher

    @OneToMany(type => Student, s => s.group)
    students: Student[]

}
