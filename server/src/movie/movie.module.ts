import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie-schema';
import { UsersSchema, User } from 'src/users/schema/user.schema';


@Module({
    providers: [MovieService],
    controllers: [MovieController],
    imports: [
        MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}]),
        MongooseModule.forFeature([{name: User.name, schema: UsersSchema}]),
        UsersModule
    ],
    exports: [
        MovieService
    ]
})
export class MovieModule {}
