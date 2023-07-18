import { Controller, Get, Query} from '@nestjs/common';
import { FindFlightsService } from './find-flights.service'

@Controller('find-flights')
export class FindFlightsController {
  constructor(private findFlightsService: FindFlightsService) {}

  @Get()
  async findFlights( 
    @Query('origin') origin: string, 
    @Query('destination') destination: string,
){

    const  flights = await this.findFlightsService.findFlights(origin,destination);
    return flights;
  }
}

