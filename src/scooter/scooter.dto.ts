import { RepairEntity } from 'src/repair/repair.entity';

export class ScooterDTO {
  name: string;
  power: number;
  brand: string;
  model: number;
  mileage: number;
}

export class ScooterRepairsDTO {
  name: string;
  power: number;
  brand: string;
  model: number;
  mileage: number;
  repairs: RepairEntity[];
}
