import { Injectable, Res } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { json } from 'stream/consumers';
import { Installment } from 'src/installment/entities/installment.entity';

@Injectable()
export class ExpenseService {

  constructor(@InjectRepository(Expense) private expenseRepository:Repository<Expense>,
              @InjectRepository(Installment) private installmentRepository:Repository<Installment>){}
  async create(createExpenseDto: CreateExpenseDto) {


    const ocmpras = createExpenseDto

    let jogos = await this.expenseRepository.save(createExpenseDto)

    

    return jogos;
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
