import { Query, Resolver } from '@nestjs/graphql';
import { RepairEntity } from './repair.entity';

import { RepairService } from './repair.service';

@Resolver(() => RepairEntity)
export class RepairResolver {
  constructor(private repairService: RepairService) {}

  @Query(() => [RepairEntity])
  async repairs(): Promise<RepairEntity[]> {
    return this.repairService.getRepairs();
  }
}
