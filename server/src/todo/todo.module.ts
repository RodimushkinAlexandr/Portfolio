// import { Module, forwardRef } from '@nestjs/common';
// import { TodoController } from './todo.controller';
// import { TodoService } from './todo.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ToDo, ToDoSchema } from './schemas/todo.schemas';
// import { UsersSchema, User } from 'src/users/schema/users.schema';

// @Module({
//     controllers: [TodoController],
//     providers: [TodoService],
//     imports: [
//         MongooseModule.forFeature([{name: User.name, schema: UsersSchema}]),
//         MongooseModule.forFeature([{name: ToDo.name, schema: ToDoSchema}]),
//     ],
//     exports: [
//         TodoService
//     ]
// })
// export class TodoModule {}
