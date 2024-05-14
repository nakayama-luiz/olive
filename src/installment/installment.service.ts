import { Injectable } from '@nestjs/common';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { Installment } from './entities/installment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstallmentService {

  constructor(@InjectRepository(Installment) private expenseRepository:Repository<Installment>){}
  async create(createInstallmentDto: CreateInstallmentDto) {
    return await this.expenseRepository.save(createInstallmentDto)
    return 'This action adds a new installment';
  }

  findAll() {
    return `This action returns all installment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} installment`;
  }

  update(id: number, updateInstallmentDto: UpdateInstallmentDto) {
    return `This action updates a #${id} installment`;
  }

  remove(id: number) {
    return `This action removes a #${id} installment`;
  }
}
