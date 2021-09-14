import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { RepairService } from './repair.service';
import { RepairController } from './repair.controller';
import { RepairEntity } from './repair.entity';
import { RepairResolver } from './repair.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RepairEntity])],
  providers: [RepairService, RepairResolver],
  controllers: [RepairController],
})
export class RepairModule {}
