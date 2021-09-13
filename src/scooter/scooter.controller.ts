import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ScooterService } from './scooter.service';

@Controller('scooter')
export class ScooterController {
  constructor(private readonly service: ScooterService) {}

  @Get()
  getScooters() {
    return this.service.getScooters();
  }

  @Get('/:id')
  getScooterWithRepair() {
    return this.service.getScooterWithRepairs();
  }

  @Post()
  createScooter() {
    return this.service.createScooter();
  }

  @Put('/:id')
  updateScooter() {
    return this.service.updateScooter();
  }

  @Delete('/:id')
  deleteScooter() {
    return this.service.deleteScooter();
  }
}
