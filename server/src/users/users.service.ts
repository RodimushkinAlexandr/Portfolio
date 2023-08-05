import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/users.schema';
import { ToDo, ToDoDocument } from 'src/todo/schemas/todo.schemas';
import { TodoService } from 'src/todo/todo.service';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) {}

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({...dto})
        return user;
    }

    async getOneUser(id: ObjectId): Promise<User> {
        const user = await this.userModel.findById(id)
        return user
    }

    async getAllUsers() {
        const users = await this.userModel.find({})
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({'email': email})
        return user;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const user = await this.userModel.findByIdAndDelete(id)
        return user._id
    }
}
