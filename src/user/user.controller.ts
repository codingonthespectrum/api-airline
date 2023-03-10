import { Controller, Get , Post , Put , Delete, Body, Param , Req , Res} from '@nestjs/common';

import { User } from "./interfaces/user";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from "./user.service";
import { parse } from 'path';

// needs to fix the usersService - it's broken 


@Controller('user')
export class UserController {
  
  constructor (private userService: UsersService){

  }

  @Get()


   
  @Post()
  createUser(@Body() user: CreateUserDto): string{
    return "hello";
  }

  @Delete(":id")
  deleteUser(@Param("id") id): string{
    console.log(id);
  return `deleting users: ${id}`;
  }

  @Put(":id")
  updateUser(@Body() user: CreateUserDto , @Param("id") id): string{
    console.log(user)
    console.log(id)
    return "invocando users";
  }

  
}
