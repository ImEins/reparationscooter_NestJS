import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { RepairDTO } from './dto/repair.dto';
import { RepairService } from './repair.service';

@Controller('repair')
export class RepairController {
  constructor(private readonly service: RepairService) {}

  @Get()
  getRepairs() {
    return this.service.getRepairs();
  }

  @Post()
  createRepair(@Body() repair: RepairDTO) {
    return this.service.createRepair(repair);
  }

  @Put('/:id')
  updateRepair(@Body() repair: RepairDTO, @Param('id') id: number) {
    return this.service.updateRepair(id, repair);
  }

  @Delete('/:id')
  deleteRepair(@Param('id') id: number) {
    return this.service.deleteRepair(id);
  }
}
