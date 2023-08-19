import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ToDoSchema, ToDo } from './schemas/todo.schemas';
import { ToDoService } from './todo.service';
import { ToDoController } from './todo.controller'

@Module({
    imports: [
        MongooseModule.forFeature([{name: ToDo.name, schema: ToDoSchema}]),
        AuthModule
    ],
    providers: [ToDoService],
    controllers: [ToDoController]
})
export class ToDoModule {}
