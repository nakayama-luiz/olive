import { Installment } from "src/installment/entities/installment.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Expense {
  
    @PrimaryColumn({ generated: 'increment' })
    id: number

    @Column()
    description: string

    @Column({ nullable: true })
    installmentCount: number;  

    @Column()
    value: number

    @OneToMany(type=>Installment, install=>install.expense, {cascade:true})
    installments?: Installment[]
  
}

