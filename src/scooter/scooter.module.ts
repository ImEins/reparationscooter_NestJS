import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ScooterController } from './scooter.controller';
import { ScooterEntity } from './scooter.entity';
import { ScooterResolver } from './scooter.resolver';
import { ScooterService } from './scooter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterEntity])],
  controllers: [ScooterController],
  providers: [ScooterService, ScooterResolver],
})
export class ScooterModule {}
