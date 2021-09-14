import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ScooterService } from './scooter.service';
import { ScooterDTO } from './scooter.dto';

@Controller('scooter')
export class ScooterController {
  constructor(private readonly service: ScooterService) {}

  @Get()
  getScooters() {
    return this.service.getScooters();
  }

  @Get('/:id')
  getScooterWithRepair(@Param() id: number) {
    return this.service.getScooterWithRepairs(id);
  }

  @Post()
  createScooter(@Body() scooter: ScooterDTO) {
    return this.service.createScooter(scooter);
  }

  @Put('/:id')
  updateScooter(@Body() scooter: ScooterDTO, @Param('id') id: number) {
    return this.service.updateScooter(id, scooter);
  }

  @Delete('/:id')
  deleteScooter(@Param('id') id: number) {
    return this.service.deleteScooter(id);
  }
}
