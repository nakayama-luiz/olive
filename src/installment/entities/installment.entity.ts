import { Expense } from "src/expense/entities/expense.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Installment {
    @PrimaryColumn({generated:'increment'})
    id:number

    @Column()
    number: number    

    @ManyToOne(type=>Expense, expense=>expense.installments)
    expense:Expense

    @Column()
    value:number
}
