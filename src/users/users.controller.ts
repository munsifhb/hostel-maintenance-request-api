import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){}




@Get()
async getUser() {
return this.usersService.getUsers();
}

@Post()
async createUser(@Body() user : CreateUserDto){
    return this.usersService.createUser(user)
}


 @Patch(':id')
  async update(
    
    @Param('id', ParseIntPipe) id: number, 
    
    @Body() updateUserDto: UpdateUserDto,  
  ) {
    return this.usersService.editUser(id, updateUserDto);
  }



  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe transforms route string (e.g. "/users/5") into the number 5
    return this.usersService.deleteUser(id);
  }
}
