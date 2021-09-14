import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterController } from './scooter.controller';
import { ScooterEntity } from './scooter.entity';
import { ScooterService } from './scooter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterEntity])],
  controllers: [ScooterController],
  providers: [ScooterService],
})
export class ScooterModule {}
