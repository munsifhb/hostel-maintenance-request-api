import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { HostelService } from './hostel.service';
import { CreateHostelDto } from './dto/create-hostel-dto';
import { UpdateHostelDto } from './dto/update-hostel-dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('hostel')
export class HostelController {

    constructor(private hostelService : HostelService) {}


    @Get()
    async getHostel() {
        return this.hostelService.getHostel()
    }

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Post()
    async createHostel(@Body() hostel : CreateHostelDto){
        return this.hostelService.createHostel(hostel)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Patch(':id')
    async editHostel(@Param('id', ParseIntPipe) id : number, @Body() updateHostelDto:  UpdateHostelDto ) {
        return this.hostelService.editHostel(id, updateHostelDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Delete(':id')
      async deleteHostel(@Param('id', ParseIntPipe) id: number) {
        // ParseIntPipe transforms route string (e.g. "/users/5") into the number 5
        return this.hostelService.deleteHostel(id);
      }
}
