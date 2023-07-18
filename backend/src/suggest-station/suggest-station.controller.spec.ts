import { Test, TestingModule } from '@nestjs/testing';
import { SuggestStationController } from './suggest-station.controller';

describe('SuggestStationController', () => {
  let controller: SuggestStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuggestStationController],
    }).compile();

    controller = module.get<SuggestStationController>(SuggestStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
