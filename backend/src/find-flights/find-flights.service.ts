import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';

@Injectable()
export class FindFlightsService {
  constructor(
    @InjectRepository(Flight)
    private flightsRepository: Repository<Flight>,
  ){}

  async findFlights(origin: string, destination: string): Promise<Flight[]> {
    const queryBuilder = this.flightsRepository.createQueryBuilder('flight');

     queryBuilder
      .select([
        'flight.flt_num', 
        'flight.out_gmt', 
        'flight.in_gmt',
        'flight.origin',
        'flight.origin_city',
        'flight.origin_region',
        'flight.destination',
        'flight.destination_city',
        'flight.destination_region'
      ])
      .where('flight.origin = :origin',{ origin: origin });

      if (origin === '' || destination === ''){
      queryBuilder
        .orWhere('flight.destination = :destination', { destination: destination });
    } else{
      queryBuilder
        .andWhere('flight.destination = :destination', { destination: destination });
    }

    const flights: Flight[] = await queryBuilder.getMany();
    return flights;
  }
}


