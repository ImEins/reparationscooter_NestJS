import { Injectable } from '@nestjs/common';

@Injectable()
export class ScooterService {
  getScooters() {
    return 'get all scooters';
  }

  getScooterWithRepairs() {
    return 'get a scooter with his repairs';
  }

  createScooter() {
    return 'create a scooter';
  }

  updateScooter() {
    return 'update a scooter';
  }

  deleteScooter() {
    return 'delete a scooter';
  }
}
