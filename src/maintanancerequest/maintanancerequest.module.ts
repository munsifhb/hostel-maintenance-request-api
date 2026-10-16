import { Module } from '@nestjs/common';
import { MaintanancerequestController } from './maintanancerequest.controller';
import { MaintanancerequestService } from './maintanancerequest.service';

@Module({
  controllers: [MaintanancerequestController],
  providers: [MaintanancerequestService]
})
export class MaintanancerequestModule {}
