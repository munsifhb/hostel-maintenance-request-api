import { Test, TestingModule } from '@nestjs/testing';
import { MaintanancerequestController } from './maintanancerequest.controller';

describe('MaintanancerequestController', () => {
  let controller: MaintanancerequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintanancerequestController],
    }).compile();

    controller = module.get<MaintanancerequestController>(MaintanancerequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
