import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ObjectId } from 'mongoose';

@Controller('/users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Get(':id') 
    getUser(@Param('id') id: ObjectId) {
        return this.usersService.getOneUser(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.usersService.delete(id);
    }
}
