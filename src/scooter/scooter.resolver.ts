import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ScooterEntity } from './scooter.entity';
import { ScooterService } from './scooter.service';

@Resolver(() => ScooterEntity)
export class ScooterResolver {
  constructor(private scooterService: ScooterService) {}

  @Query(() => [ScooterEntity])
  async getScooters(): Promise<ScooterEntity[]> {
    return this.scooterService.getScooters();
  }

  @Query(() => ScooterEntity)
  async getScooterWithRepairs(@Args('id', { type: () => Int }) id: number) {
    return this.scooterService.getScooterWithRepairs(id);
  }
}
