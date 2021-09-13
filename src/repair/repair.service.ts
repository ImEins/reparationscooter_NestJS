import { Injectable } from '@nestjs/common';

@Injectable()
export class RepairService {
  getRepairs() {
    return 'get all';
  }

  createRepair() {
    return 'create';
  }

  updateRepair() {
    return 'update';
  }

  deleteRepair() {
    return 'delete';
  }
}
