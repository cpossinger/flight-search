import { Controller, Get, Query} from '@nestjs/common';
import { SuggestStationService } from './suggest-station.service'


@Controller('suggest-station')
export class SuggestStationController {
  constructor(private suggestStationService: SuggestStationService) {}

  @Get()
  async findStations( 
        @Query('searchStr') searchStr: string, 
        @Query('stationType') stationType: 'origin' | 'destination',
      ){
    const  stations = await this.suggestStationService.findStations(searchStr,stationType);
    return stations;
  }
}
