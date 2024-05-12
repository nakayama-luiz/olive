import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private accountRepository:Repository<Account>){}

  async create(createAccountDto: CreateAccountDto) {
    const newAccount = this.accountRepository.create({...createAccountDto})
   return await this.accountRepository.save(newAccount) 
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
