import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema, User } from './schema/users.schema';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TodoModule } from 'src/todo/todo.module';
import { ToDo, ToDoSchema } from 'src/todo/schemas/todo.schemas';
import { TodoService } from 'src/todo/todo.service';
import { FavoritesMovies, FavoritesMoviesSchema } from 'src/favorites-movies/schema/favorites-movies.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: FavoritesMovies.name, schema: FavoritesMoviesSchema}]),
        TodoModule
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
