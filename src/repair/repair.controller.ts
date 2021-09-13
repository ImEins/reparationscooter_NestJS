import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RepairService } from './repair.service';

@Controller('repair')
export class RepairController {
  constructor(private readonly repairService: RepairService) {}

  @Get()
  getRepairs() {
    return this.repairService.getRepairs();
  }

  @Post()
  createRepair() {
    return this.repairService.createRepair();
  }

  @Put('/:id')
  updateRepair() {
    return this.repairService.updateRepair();
  }

  @Delete('/:id')
  deleteRepair() {
    return this.repairService.deleteRepair();
  }
}
