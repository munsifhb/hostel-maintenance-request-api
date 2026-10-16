import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMaintananceRequestDto } from './dto/create-maintanancerequest-dto';
import { UpdateMaintananceRequestDto } from './dto/update-maintanancerequest-dto';

@Injectable()
export class MaintanancerequestService {


    constructor(private prisma : PrismaService ) {}
    
    
    
         //   get All Hostels
    
          async getMaintananceRequest() {
            return this.prisma.maintanancerequest.findMany()
          }
    
    
          //   create hostel
          
          
              async createMaintananceRequest(createMaintananceRequestDto : CreateMaintananceRequestDto) {
                  return  this.prisma.maintanancerequest.create({
                      data : {
                          ...createMaintananceRequestDto
                      }
                  })
              }
    
    
            //   update Hostel 
    
            async editMaintananceRequest(id: number, updateMaintananceRequestDto : UpdateMaintananceRequestDto) {
                try{
                        const updateMaintananceRequest = await this.prisma.maintanancerequest.update({
                            where : {
                                id : id
                            },
                            data : updateMaintananceRequestDto
                        })
                
                        return updateMaintananceRequest
                    }catch (error) {
                        if (error.code === 'P2025') {
                            throw new NotFoundException(`Maintanace Request with id number${id} is not found`)
                        }
                
                        throw error
                    }
    
                    
            }
    
    
    
            // delete 
          async deleteMaintananceRequest(id: number) {
        try {
          // Prisma deletes the record from PostgreSQL using the integer ID
          const removeMaintananceRequest = await this.prisma.maintanancerequest.delete({
            where: { id: id },
          });
    
          // Returning a success message or the deleted record profile
          return {
            message: `User with ID ${id} successfully deleted`,
            removeMaintananceRequest,
          };
        } catch (error) {
          // Prisma throws code 'P2025' if the request doesn't exist in the database
          if (error.code === 'P2025') {
            throw new NotFoundException(`Maintanance Request with ID ${id} does not exist.`);
          }
          throw error;
        }
      }

}
