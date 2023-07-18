import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindFlightsService } from './find-flights.service';
import { FindFlightsController } from './find-flights.controller';
import { Flight } from './flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  providers: [FindFlightsService],
  controllers: [FindFlightsController],
})
export class FindFlightsModule {}
