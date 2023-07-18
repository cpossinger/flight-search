import { Test, TestingModule } from '@nestjs/testing';
import { FindFlightsController } from './find-flights.controller';

describe('FindFlightsController', () => {
  let controller: FindFlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindFlightsController],
    }).compile();

    controller = module.get<FindFlightsController>(FindFlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
