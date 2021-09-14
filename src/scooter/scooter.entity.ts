import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RepairEntity } from 'src/repair/repair.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ScooterEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ length: 40 })
  @Field({ nullable: true })
  name: string;

  @Column()
  @Field({ nullable: true })
  power: number;

  @Column({ length: 40 })
  @Field({ nullable: true })
  brand: string;

  @Column()
  @Field({ nullable: true })
  model: number;

  @Column({ type: 'float' })
  @Field({ nullable: true })
  mileage: number;

  @ManyToMany(() => RepairEntity)
  @JoinTable({ name: 'scooters_repairs' })
  @Field(() => [RepairEntity])
  repairs: Promise<RepairEntity[]>;
}
