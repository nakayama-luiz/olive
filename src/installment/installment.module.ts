import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Installment } from './entities/installment.entity';

@Module({
  controllers: [InstallmentController],
  providers: [InstallmentService],
  imports: [TypeOrmModule.forFeature([Installment])]
})
export class InstallmentModule {}
