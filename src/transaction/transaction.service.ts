import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private transactionHistory:Repository<Transaction>){}
  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionHistory.save(createTransactionDto)
  }

  findAll() {
    return `This action returns all transaction`;
  }

 async findOne(id: number) {
    return await this.transactionHistory.findOneBy({id: id})
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return await this.transactionHistory.update(id,updateTransactionDto)
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
