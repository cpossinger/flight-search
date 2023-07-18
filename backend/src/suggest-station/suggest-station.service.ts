import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Flight } from '../find-flights/flight.entity';


@Injectable()
export class SuggestStationService {
  constructor(

    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ){}

  async findStations(searchStr: string, stationType: 'origin' | 'destination'): Promise<string[]> {
    const queryBuilder = this.flightRepository.createQueryBuilder('station');

    const stations = await queryBuilder
      .select([
        `station.${stationType}`,
        `station.${stationType}_city`,
        `station.${stationType}_region`
      ])

      .where(     `station.${stationType}        ILike :searchStr`,   { searchStr:   `${searchStr}%` })
      .orWhere(   `station.${stationType}_city   ILike :searchStr`,   { searchStr:   `${searchStr}%` })
      .orWhere(   `station.${stationType}_region ILike :searchStr`,   { searchStr:   `${searchStr}%` })

      .orderBy(   `similarity(station.${stationType},        :searchStr)`,'DESC')
      .addOrderBy(`similarity(station.${stationType}_city,   :searchStr)`,'DESC')
      .addOrderBy(`similarity(station.${stationType}_region, :searchStr)`,'DESC')

      .getMany();

    const  uniqueStations = this.removeDuplicates(stations,stationType); 
    const  stationArray = this.convertStationsToStrings(uniqueStations,stationType);

    return stationArray;
  }

    
private removeDuplicates(stations: Flight[], stationType: 'origin' | 'destination'): Flight[] {
    return Object.values(stations.reduce((acc, obj) => ({ ...acc, [obj[stationType]]: obj }), {}));
  }
private convertStationsToStrings(stations: Flight[], stationType: 'origin' | 'destination'): string[] {
    return stations.map(station => `${station[stationType as keyof Flight]} - ${station[stationType + '_city' as keyof Flight]}, ${station[stationType + '_region' as keyof Flight]}`
    );
  }

 }






