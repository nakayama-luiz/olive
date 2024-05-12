import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { Account } from './account/entities/account.entity';
import { BankAccount } from './bank-account/entities/bank-account.entity';
import { RevenueModule } from './revenue/revenue.module';
import { ExpenseModule } from './expense/expense.module';
import { TransactionModule } from './transaction/transaction.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite3',
      entities: [Account, BankAccount],
      synchronize: true,
      //autoLoadEntities: true
    }),
    AccountModule,
    BankAccountModule,
    RevenueModule,
    ExpenseModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource){}
}
