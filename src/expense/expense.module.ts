import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Installment } from 'src/installment/entities/installment.entity';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService],
  imports: [TypeOrmModule.forFeature([Expense,Installment])]
})
export class ExpenseModule {}
