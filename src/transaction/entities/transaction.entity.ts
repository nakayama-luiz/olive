import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { TransactionType } from "../enums/transacTypes";
import { BankAccount } from "src/bank-account/entities/bank-account.entity";

@Entity()
export class Transaction {
    @PrimaryColumn({generated: "increment"})
    id: number

    @Column()
    description: string;

    @Column()
    value: number;

    @Column({enum: TransactionType})
   type:TransactionType

    @ManyToOne(type=>BankAccount, bank=>bank.transaction)
    bankAccount: BankAccount

    @Column()
    date: Date

}
