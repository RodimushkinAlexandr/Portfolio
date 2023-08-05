import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument } from './schemas/todo.schemas';
import { Model, ObjectId } from 'mongoose';
import { CreateToDoDto } from './dto/create-todo.dto';
import { User, UserDocument } from 'src/users/schema/users.schema';

@Injectable()
export class TodoService {

    constructor(@InjectModel(ToDo.name) private toDoModel: Model<ToDoDocument>,
                @InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createToDo(dto: CreateToDoDto): Promise<ToDo> {
        const user = await this.userModel.findById(dto.userId);
        const newtodo = await this.toDoModel.create({...dto})
        user.todo.push(newtodo._id)
        await user.save();
        return newtodo;
    }

    async putComplitedToDoForUser(id: ObjectId): Promise<ToDo>  {
        const todo = await this.toDoModel.findByIdAndUpdate(id)
        todo.completed = !todo.completed
        await todo.save()
        return todo
    }

    async deleteTodoForUser(id: ObjectId): Promise<ObjectId> {
        const todo = await this.toDoModel.findByIdAndDelete(id)
        return todo.id
    }
 
    async getToDoForUser(id: ObjectId): Promise<ToDo[]> {
        const user = await this.userModel.findById(id)
        const todos = (await this.getAllToDo()).filter((item) => -1 !== user.todo.indexOf(item.id))
        return todos
    }

    async getAllToDo() {
        const todos = await this.toDoModel.find({})
        return todos;
    }
}
