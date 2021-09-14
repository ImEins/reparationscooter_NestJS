import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RepairDTO } from './dto/repair.dto';
import { RepairEntity } from './repair.entity';

@Injectable()
export class RepairService {
  constructor(
    @InjectRepository(RepairEntity)
    private readonly repairRepo: Repository<RepairEntity>,
  ) {}

  async getRepairs() {
    return await this.repairRepo.find();
  }

  async createRepair(repair: RepairDTO) {
    try {
      await this.repairRepo.save(repair);
    } catch (err) {
      return err;
    }
  }

  async updateRepair(id: number, repair: RepairDTO) {
    try {
      await this.repairRepo.update(id, repair);
    } catch (err) {
      return err;
    }
  }

  async deleteRepair(id: number) {
    try {
      await this.repairRepo.delete(id);
    } catch (err) {
      return err;
    }
  }
}
