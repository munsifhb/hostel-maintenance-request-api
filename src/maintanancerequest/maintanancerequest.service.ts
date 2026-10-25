import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMaintananceRequestDto } from './dto/create-maintanancerequest-dto';
import { UpdateMaintananceRequestDto } from './dto/update-maintanancerequest-dto';

@Injectable()
export class MaintanancerequestService {


    constructor(private prisma : PrismaService ) {}
    
    
    
         //   get All maintenancerequest
    
          async getMaintananceRequest(userId : number) {
            return this.prisma.maintenanceRequest.findMany({
              where : {
                userId,
              }
            })
          }
    
    
          //   create maintenancerequest
          
async createMaintananceRequest(
  createMaintananceRequestDto: CreateMaintananceRequestDto,
  userId: number,
  
) {
   const { hostelId, ...requestData } = createMaintananceRequestDto;
  return this.prisma.maintenanceRequest.create({
    data: {
      ...requestData,
      user: {
        connect: {
          id: userId,
        },
      },
      hostel: {
        connect: {
          id: hostelId,
        },
      },
    },
  });
}
    
    
 //   update mrequest
    
 
async editMaintananceRequest(
  id: number,
  updateMaintananceRequestDto: UpdateMaintananceRequestDto,
  userId: number,
) {
  const mainRequest = await this.prisma.maintenanceRequest.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!mainRequest) {
    throw new NotFoundException('Request not found');
  }

  const result = await this.prisma.maintenanceRequest.updateMany({
    where: {
      id,
      userId,
    },
    data: updateMaintananceRequestDto,
  });

  if (result.count === 0) {
    throw new NotFoundException('Request not found');
  }

  return this.prisma.maintenanceRequest.findFirst({
    where: {
      id,
      userId,
    },
  });
}

    
    
    
            // delete 
        
async deleteMaintananceRequest(id: number, userId: number) {
  const result = await this.prisma.maintenanceRequest.deleteMany({
    where: {
      id,
      userId,
    },
  });

  if (result.count === 0) {
    throw new NotFoundException('Request not found');
  }

  return {
    message: `Maintenance request with ID ${id} successfully deleted`,
  };
}


}
