import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScooterDTO } from './scooter.dto';
import { ScooterEntity } from './scooter.entity';

@Injectable()
export class ScooterService {
  constructor(
    @InjectRepository(ScooterEntity)
    private readonly scooterRepo: Repository<ScooterEntity>,
  ) {}

  async getScooters() {
    return await this.scooterRepo.find();
  }

  async getScooterWithRepairs(id: number) {
    const scooter = await this.scooterRepo.findOne(id);
    await scooter.repairs;
    if (scooter) {
      return scooter;
    }
  }

  async createScooter(scooter: ScooterDTO) {
    try {
      await this.scooterRepo.save(scooter);
    } catch (err) {
      return err;
    }
  }

  async updateScooter(id: number, scooter: ScooterDTO) {
    try {
      await this.scooterRepo.update(id, scooter);
    } catch (err) {
      return err;
    }
  }

  async deleteScooter(id: number) {
    try {
      await this.scooterRepo.delete(id);
    } catch (err) {
      return err;
    }
  }
}
