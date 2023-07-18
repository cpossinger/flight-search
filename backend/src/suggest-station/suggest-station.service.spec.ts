import { Test, TestingModule } from '@nestjs/testing';
import { SuggestStationService } from './suggest-station.service';

describe('SuggestStationService', () => {
  let service: SuggestStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuggestStationService],
    }).compile();

    service = module.get<SuggestStationService>(SuggestStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
