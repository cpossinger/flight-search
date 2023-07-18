import { Test, TestingModule } from '@nestjs/testing';
import { FindFlightsService } from './find-flights.service';

describe('FindFlightsService', () => {
  let service: FindFlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindFlightsService],
    }).compile();

    service = module.get<FindFlightsService>(FindFlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
