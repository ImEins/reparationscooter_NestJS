import { ScooterEntity } from 'src/scooter/scooter.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RepairEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', width: 5 })
  abbr: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToMany(() => ScooterEntity)
  scooters: ScooterEntity[];
}
