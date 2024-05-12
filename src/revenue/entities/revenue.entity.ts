import { Column, Entity, NumericType, PrimaryColumn } from "typeorm";

@Entity()
export class Revenue {

    @PrimaryColumn({generated: 'increment'})
    id: number

    @Column()
    value: number

    @Column()
    description: string
}
