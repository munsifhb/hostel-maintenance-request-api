import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { HostelService } from './hostel.service';
import { CreateHostelDto } from './dto/create-hostel-dto';
import { UpdateHostelDto } from './dto/update-hostel-dto';

@Controller('hostel')
export class HostelController {

    constructor(private hostelService : HostelService) {}


    @Get()
    async getHostel() {
        return this.hostelService.getHostel()
    }

    @Post()
    async createHostel(@Body() hostel : CreateHostelDto){
        return this.hostelService.createHostel(hostel)
    }


    @Patch(':id')
    async editHostel(@Param('id', ParseIntPipe) id : number, @Body() updateHostelDto:  UpdateHostelDto ) {
        return this.hostelService.editHostel(id, updateHostelDto)
    }


    @Delete(':id')
      async deleteHostel(@Param('id', ParseIntPipe) id: number) {
        // ParseIntPipe transforms route string (e.g. "/users/5") into the number 5
        return this.hostelService.deleteHostel(id);
      }
}
