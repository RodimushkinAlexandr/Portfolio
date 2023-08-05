import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { ObjectId } from 'mongoose';

@Controller('/todo')
export class TodoController {

    constructor(private todoService: TodoService) {}

    @Post()
    createToDo(@Body() dto: CreateToDoDto) {
        return this.todoService.createToDo(dto)
    }

    @Get(':id')  
    getToDoForUser(@Param('id') id: ObjectId) {
        return this.todoService.getToDoForUser(id)
    }

    @Get()
    getAllTodo() {
        return this.todoService.getAllToDo()
    }

    @Put(':id')
    putComplitedToDoForUser(@Param('id') id:ObjectId) {
        return this.todoService.putComplitedToDoForUser(id)
    }

    @Delete(':id')
    deleteTodoForUser(@Param('id') id:ObjectId) {
        return this.todoService.deleteTodoForUser(id)
    }

}
