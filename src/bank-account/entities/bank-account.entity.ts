import { Account } from "src/account/entities/account.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, Table } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@Entity()
export class BankAccount {
    @PrimaryColumn({generated: "increment"})
    id: number;

    @Column()
    name: string;

    
    @Column({nullable:true, readonly: false})
    bankACCbalance: number

    @ManyToOne(type=> Account, acc=>acc.banckAccounts)
    owner: Account

}
