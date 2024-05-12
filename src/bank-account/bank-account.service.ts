import { Inject, Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankAccountService {
  constructor(@InjectRepository(BankAccount) private bankAccountRepository:Repository<BankAccount>){}
  async create(createBankAccountDto: CreateBankAccountDto) {

    return await this.bankAccountRepository.save(createBankAccountDto)
    return 'This action adds a new bankAccount';
  }

  findAll() {
    return `This action returns all bankAccount`;
  }

  async findOne(id: number) {
    return await this.bankAccountRepository.findOneBy({id: id})
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
