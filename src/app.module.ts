import { Module } from '@nestjs/common';

import { ScooterModule } from './scooter/scooter.module';

import { RepairModule } from './repair/repair.module';

import { TypeOrmModule } from '@nestjs/typeorm';
// - GraphQL
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(),
    ScooterModule,
    RepairModule,
  ],
})
export class AppModule {}
