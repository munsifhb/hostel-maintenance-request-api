import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { MaintanancerequestService } from './maintanancerequest.service';
import { CreateMaintananceRequestDto } from './dto/create-maintanancerequest-dto';
import { UpdateMaintananceRequestDto } from './dto/update-maintanancerequest-dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('maintanancerequest')
export class MaintanancerequestController {
  constructor(
    private maintanancerequestService: MaintanancerequestService,
  ) {}

  // Public: Get all requests
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  async getAllMaintanancerequest() {
    return this.maintanancerequestService.getAllMaintananceRequest();
  }

  // USER: Get own requests
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  @Get('my-requests')
  async getMaintanancerequest(@Request() req) {
    return this.maintanancerequestService.getMaintananceRequest(
      req.user.sub,
    );
  }

  // USER: Create request
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
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

  // USER: Edit own request
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  @Patch(':id')
  async editMaintanancerequest(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHostelDto: UpdateMaintananceRequestDto,
    @Request() req,
  ) {
    return this.maintanancerequestService.editMaintananceRequest(
      id,
      updateHostelDto,
      req.user.sub,
    );
  }

  // USER: Delete own maintenance request
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('USER')
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

  // ADMIN: Delete any request
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async deleteAllUsersMaintanancerequest(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.maintanancerequestService.deleteAllUsersMaintananceRequest(id);
  }
}