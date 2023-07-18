import { Module } from '@nestjs/common';
import { SuggestStationService } from './suggest-station.service';
import { SuggestStationController } from './suggest-station.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../find-flights/flight.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  providers: [SuggestStationService],
  controllers: [SuggestStationController]
})
export class SuggestStationModule {}
