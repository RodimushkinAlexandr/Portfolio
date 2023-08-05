import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie-schema';
import { UsersSchema, User } from 'src/users/schema/users.schema';
import { FileService } from 'src/file/file.service';
import { FavoritesMoviesModule } from 'src/favorites-movies/favorites-movies.module';
import { FavoritesMovies, FavoritesMoviesSchema } from 'src/favorites-movies/schema/favorites-movies.schema';


@Module({
    providers: [MovieService, FileService],
    controllers: [MovieController],
    imports: [
        MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}]),
        MongooseModule.forFeature([{name: User.name, schema: UsersSchema}]),
        MongooseModule.forFeature([{name: FavoritesMovies.name, schema: FavoritesMoviesSchema}]),
        FavoritesMoviesModule,
        HttpModule,
        UsersModule
    ],
    exports: [
        MovieService
    ]
})
export class MovieModule {}
