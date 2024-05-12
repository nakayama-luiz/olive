import { UUID } from "crypto";
import { BankAccount } from "src/bank-account/entities/bank-account.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Account {

    @PrimaryColumn('uuid', {generated: "uuid"})
    id: string;

    @Column({readonly:false})
    username: string;

    @Column({default: 0, readonly:false})
    balance: number;

    @OneToMany(type=> BankAccount, bankacc=>bankacc.owner, {nullable: true})
    banckAccounts: BankAccount[]


}
