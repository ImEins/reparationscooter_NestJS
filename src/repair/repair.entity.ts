import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ScooterEntity } from 'src/scooter/scooter.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class RepairEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', width: 7 })
  @Field({ nullable: true })
  abbr: string;

  @Column({ type: 'text' })
  @Field({ nullable: true })
  description: string;

  @Column({ type: 'float' })
  @Field({ nullable: true })
  price: number;

  @ManyToMany(() => ScooterEntity)
  @Field(() => [ScooterEntity])
  scooters: Promise<ScooterEntity[]>;
}
