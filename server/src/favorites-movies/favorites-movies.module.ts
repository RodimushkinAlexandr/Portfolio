// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UsersSchema } from 'src/users/schema/users.schema';
// import { Movie, MovieSchema } from 'src/movie/schemas/movie-schema';
// import { FavoritesMoviesService } from './favorites-movies.service';
// import { FavoritesMovies, FavoritesMoviesSchema } from './schema/favorites-movies.schema';
// import { FavoritesMoviesController } from './favorites-movies.controller';

// @Module({
//     providers: [FavoritesMoviesService],
//     controllers: [FavoritesMoviesController],
//     imports: [
//         MongooseModule.forFeature([{name: FavoritesMovies.name, schema: FavoritesMoviesSchema}]),
//         MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}]),
//         MongooseModule.forFeature([{name: User.name, schema: UsersSchema}])
//     ],
//     exports: [
//         FavoritesMoviesService
//     ]
// })
// export class FavoritesMoviesModule {}
