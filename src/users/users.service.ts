import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {

    constructor(
        private prisma: PrismaService,
      ) {}


    //   get All users

      async getUsers() {
        return this.prisma.user.findMany()
      }



    //   create user


    async createUser(createUserDto : CreateUserDto) {
        return  this.prisma.user.create({
            data : {
                ...createUserDto
            }
        })
    }


    // EditUser

    async editUser(
        id: number,
        updateUserDto: UpdateUserDto
    ){

        try{
        const updateUser = await this.prisma.user.update({
            where : {
                id : id
            },
            data : updateUserDto
        })

        return updateUserDto
    }catch (error) {
        if (error.code === 'P2025') {
            throw new NotFoundException(`User with id number${id} is not found`)
        }

        throw error
    }

    }


    // delete User
      async deleteUser(id: number) {
    try {
      // Prisma deletes the record from PostgreSQL using the integer ID
      const removeUser = await this.prisma.user.delete({
        where: { id: id },
      });

      // Returning a success message or the deleted record profile
      return {
        message: `User with ID ${id} successfully deleted`,
        removeUser,
      };
    } catch (error) {
      // Prisma throws code 'P2025' if the user doesn't exist in the database
      if (error.code === 'P2025') {
        throw new NotFoundException(`User with ID ${id} does not exist.`);
      }
      throw error;
    }
  }


  async findByUsername(username: string) {
  return this.prisma.user.findUnique({
    where: { username },
  });
}

async findByEmail(email: string) {
  return this.prisma.user.findUnique({
    where: { email },
  });
}
}
