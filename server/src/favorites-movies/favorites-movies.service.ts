// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model, ObjectId } from 'mongoose';
// import { User, UserDocument } from 'src/users/schema/users.schema';
// import { FavoritesMovies, FavoritesMoviesDocument } from './schema/favorites-movies.schema';
// import { CreateFavoritesMovieDto } from './dto/create-favorites-movies';

// @Injectable()
// export class FavoritesMoviesService {

//     constructor(@InjectModel(FavoritesMovies.name) private FavoritesMoviesModel: Model<FavoritesMoviesDocument>,
//                 @InjectModel(User.name) private userModel: Model<UserDocument>) {}


//     async getAllFavoritesMovies(): Promise<FavoritesMovies[]> {
//         const favoritesMovies = this.FavoritesMoviesModel.find()
//         return favoritesMovies
//     }

//     async deleteFavoritesMovies(id: ObjectId): Promise<FavoritesMovies> {
//         const favoritesMovie = await this.FavoritesMoviesModel.findByIdAndDelete(id)
//         return favoritesMovie;
//     }
 
//     async addNewFavoriteMovie() {
        
//     }
// }
