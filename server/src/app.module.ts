import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { MovieModule } from './movie/movie.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'
import { FavoritesMoviesModule } from './favorites-movies/favorites-movies.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@widget.1naelqw.mongodb.net/?retryWrites=true&w=majority'),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
        TodoModule,
        UsersModule,
        AuthModule,
        MovieModule,
        FavoritesMoviesModule,
        FileModule
    ],
})
export class AppModule {}