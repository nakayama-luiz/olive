import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Expense {

    @PrimaryColumn({generated: 'increment'})
    id: number

    @Column()
    description: string

    @Column()
    value: number
}
