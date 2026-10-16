import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MaintanancerequestService } from './maintanancerequest.service';
import { CreateMaintananceRequestDto } from './dto/create-maintanancerequest-dto';
import { UpdateMaintananceRequestDto } from './dto/update-maintanancerequest-dto';

@Controller('maintanancerequest')
export class MaintanancerequestController {

    constructor(private maintanancerequestService : MaintanancerequestService) {}
    
    
        @Get()
        async getMaintanancerequest() {
            return this.maintanancerequestService.getMaintananceRequest()
        }
    
        @Post()
        async createMaintanancerequest(@Body() hostel : CreateMaintananceRequestDto){
            return this.maintanancerequestService.createMaintananceRequest(hostel)
        }
    
    
        @Patch(':id')
        async editMaintanancerequest(@Param('id', ParseIntPipe) id : number, @Body() updateHostelDto:  UpdateMaintananceRequestDto ) {
            return this.maintanancerequestService.editMaintananceRequest(id, updateHostelDto)
        }
    
    
        @Delete(':id')
          async deleteMaintanancerequest(@Param('id', ParseIntPipe) id: number) {
            // ParseIntPipe transforms route string (e.g. "/users/5") into the number 5
            return this.maintanancerequestService.deleteMaintananceRequest(id);
          }

}
