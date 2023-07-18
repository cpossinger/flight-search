import { Module } from '@nestjs/common';
import { FindFlightsModule } from './find-flights/find-flights.module';
import { SuggestStationModule } from './suggest-station/suggest-station.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './find-flights/flight.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'delta',
      database: 'flight_search',
      entities: [Flight],
    }),
    FindFlightsModule,
    SuggestStationModule,
  ],
})
export class AppModule {}
