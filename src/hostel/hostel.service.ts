import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CreateHostelDto } from './dto/create-hostel-dto';
import { UpdateHostelDto } from './dto/update-hostel-dto';

@Injectable()
export class HostelService {

    constructor(private prisma : PrismaService ) {}



     //   get All Hostels

      async getHostel() {
        return this.prisma.hostel.findMany()
      }


      //   create hostel
      
      
          async createHostel(createHostelDto : CreateHostelDto) {
              return  this.prisma.hostel.create({
                  data : {
                      ...createHostelDto
                  }
              })
          }


        //   update Hostel 

        async editHostel(id: number, updateHostelDto : UpdateHostelDto) {
            try{
                    const updateHostel = await this.prisma.hostel.update({
                        where : {
                            id : id
                        },
                        data : updateHostelDto
                    })
            
                    return updateHostel
                }catch (error) {
                    if (error.code === 'P2025') {
                        throw new NotFoundException(`User with id number${id} is not found`)
                    }
            
                    throw error
                }

                
        }



        // delete Hostel
      async deleteHostel(id: number) {
    try {
      // Prisma deletes the record from PostgreSQL using the integer ID
      const removeHostel = await this.prisma.hostel.delete({
        where: { id: id },
      });

      // Returning a success message or the deleted record profile
      return {
        message: `User with ID ${id} successfully deleted`,
        removeHostel,
      };
    } catch (error) {
      // Prisma throws code 'P2025' if the Hostel doesn't exist in the database
      if (error.code === 'P2025') {
        throw new NotFoundException(`Hostel with ID ${id} does not exist.`);
      }
      throw error;
    }
  }
}
