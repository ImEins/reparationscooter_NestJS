import { Module } from '@nestjs/common';
import { ScooterModule } from './scooter/scooter.module';
import { RepairModule } from './repair/repair.module';

@Module({
  imports: [ScooterModule, RepairModule],
})
export class AppModule {}
