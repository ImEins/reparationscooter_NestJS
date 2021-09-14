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

  getScooters() {
    return this.scooterRepo.find();
  }

  async getScooterWithRepairs(id: number) {
    // const scooter = await this.scooterRepo.findOneOrFail(id);
    // if (scooter) {
    //   const scooter_repairs = await this.scooterRepo.
    // }
    return 'to come';
  }

  async createScooter(scooter: ScooterDTO) {
    try {
      await this.scooterRepo.save(scooter);
    } catch (err) {
      console.log(err);
    }
  }

  async updateScooter(id: number, scooter: ScooterDTO) {
    try {
      await this.scooterRepo.update(id, scooter);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteScooter(id: number) {
    try {
      await this.scooterRepo.delete(id);
    } catch (err) {
      console.log(err);
    }
  }
}
