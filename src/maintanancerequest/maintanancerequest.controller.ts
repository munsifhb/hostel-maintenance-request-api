import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { MaintanancerequestService } from './maintanancerequest.service';
import { CreateMaintananceRequestDto } from './dto/create-maintanancerequest-dto';
import { UpdateMaintananceRequestDto } from './dto/update-maintanancerequest-dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('maintanancerequest')
@UseGuards(JwtAuthGuard)

export class MaintanancerequestController {

    constructor(private maintanancerequestService : MaintanancerequestService) {}
    
    
        @Get()
        async getMaintanancerequest(@Request() req) {
            return this.maintanancerequestService.getMaintananceRequest(req.user.sub)
        }
    
        @Post()
async createMaintanancerequest(
  @Body() hostel: CreateMaintananceRequestDto,
  @Request() req,
) {
  return this.maintanancerequestService.createMaintananceRequest(
    hostel,
    req.user.sub,
    
  );
}
    
    
        @Patch(':id')
        async editMaintanancerequest(@Param('id', ParseIntPipe) id : number,
        @Body() updateHostelDto:  UpdateMaintananceRequestDto,
        @Request() req,
      ) {
            return this.maintanancerequestService.editMaintananceRequest(id, updateHostelDto, req.user.sub)
        }
    
    

@Delete(':id')
async deleteMaintanancerequest(
  @Param('id', ParseIntPipe) id: number,
  @Request() req,
) {
  return this.maintanancerequestService.deleteMaintananceRequest(
    id,
    req.user.sub,
  );
}


}
