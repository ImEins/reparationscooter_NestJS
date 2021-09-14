import { Module } from '@nestjs/common';

import { ScooterModule } from './scooter/scooter.module';

import { RepairModule } from './repair/repair.module';
// - ORM
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), ScooterModule, RepairModule],
})
export class AppModule {}
