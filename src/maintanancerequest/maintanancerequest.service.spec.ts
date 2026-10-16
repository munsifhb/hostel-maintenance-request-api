import { Test, TestingModule } from '@nestjs/testing';
import { MaintanancerequestService } from './maintanancerequest.service';

describe('MaintanancerequestService', () => {
  let service: MaintanancerequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintanancerequestService],
    }).compile();

    service = module.get<MaintanancerequestService>(MaintanancerequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
