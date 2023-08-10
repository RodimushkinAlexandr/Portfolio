import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UsersDocument } from 'src/users/schema/user.schema';
import { Movie, MovieDocument } from './schemas/movie-schema';
import { HttpService } from '@nestjs/axios'
import { CreateMovieDto } from './dto/create-movie.tdo';


@Injectable()
export class MovieService {

    constructor(@InjectModel(Movie.name) private moviesService: Model<MovieDocument>,
                @InjectModel(User.name) private userModel: Model<UsersDocument>,
                private readonly httpService: HttpService) {}

    async getAllMovies() {
        let movies = await this.moviesService.find()
        let arr = []
        for (let i = 0; i < movies.length; i++) {
            if(arr.includes(movies[i].name)) {
                await this.deleteOneMovie(movies[i]._id)
            } else {
                arr.push(movies[i].name)
            }
        }
        console.log(movies.length)
        return movies;
    }

    async getOneMovie(id: ObjectId): Promise<Movie> {
        const movie = (await this.moviesService.findById(id))
        return movie._id;
    }

    async deleteOneMovie(id: ObjectId): Promise<Movie> {
        const movie = await this.moviesService.findByIdAndDelete(id)
        return movie
    }       

    async getOneMovieName(dto: CreateMovieDto): Promise<Movie[]> {
        
        let movies = await this.getAllMovies()
            movies = movies.filter((movie) =>  movie.name.indexOf(dto.name) >= 0)
        
        return movies
    }
 
    async getFilterComedy(dto: CreateMovieDto): Promise<Movie[]> {
        
        let movies = await this.getAllMovies()

            dto.year == 'all' ? '' : movies = movies.filter(movie => movie.year == dto.year)
            Object.values(dto.genres[0]).join() == 'all' ? '' : movies = movies.filter(movie => this.getfilterMovies(movie.genres, dto.genres))
            Object.values(dto.countries[0]).join() == 'all' ? '' : movies = movies.filter(movie => this.getfilterMovies(movie.countries, dto.countries))
            return movies
    }

    getfilterMovies(data, filterDto): boolean {
            const genres = data.map(genre => Object.values(genre).join().toLowerCase())

            for (let i = 0; i < filterDto.length; i++) {

                    let dtoFilter = Object.values(filterDto[i]).join().toLowerCase()

                    if (genres.includes(dtoFilter)) {
                        return true
                    }
            }
            return false
    }

    async addfavoritesMovie(id:ObjectId, idMovie:ObjectId) {
    //     console.log(id, idMovie)
    //     const user = await this.userModel.findById(id);
    //     const movie = await this.getOneMovie(idMovie)
    //     console.log(user, movie)
    //     // user.favoritesMovies.push(movie)
    //     await user.save();
    //     return user;
    }


    // async allMov(): Promise<Movie[]> {
    //     const movies = await this.moviesService.insertMany( 
           
    //     )
    //     return }
}
