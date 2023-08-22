import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UsersDocument } from 'src/users/schema/user.schema';
import { Movie, MovieDocument } from './schemas/movie-schema';
import { HttpService } from '@nestjs/axios'
import { CreateMovieDto } from './dto/create-movie.tdo';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { kMaxLength } from 'buffer';


@Injectable()
export class MovieService {

    constructor(@InjectModel(Movie.name) private moviesService: Model<MovieDocument>) {}

    async getAllMovies() {
        const movies = await this.moviesService.find()
        
        // let arr = []
        // for (let i = 0; i < movies.length; i++) {
        //     if(arr.includes(movies[i].name)) {
        //         await this.deleteOneMovie(movies[i]._id)
        //     } else {
        //         arr.push(movies[i].name)
        //     }
        // }
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
 
    async getMoviesFilter(dto: FilterMovieDto): Promise<Movie[]> {
        
        let movies = await this.getAllMovies()

        if (dto.year) movies = movies.filter(movie => movie.year == dto.year)
        if (dto.genre)  movies = movies.filter(movie => movie.genres.map(genre => Object.values(genre).join()).includes(dto.genre))
        if (dto.country)  movies = movies.filter(movie => movie.countries.map(country => Object.values(country).join()).includes(dto.country))

        // dto?.genres ? movies = movies.filter(movie => this.getfilterMovies(movie.genres, dto.genres)) : '' 
        // dto?.countries ?  movies = movies.filter(movie => this.getfilterMovies(movie.countries, dto.countries)) : ''
        return movies
    }

    async getAllFilters(): Promise<object> {
        let movies = await this.getAllMovies()
        let filterGenre = []
        let filterYear = []
        let filterCountries = []

        movies.map((item) => {
            item.genres.map((filter) => {
                if(filterGenre.includes((Object.values(filter)).join())) return false
                filterGenre.push((Object.values(filter)).join())
            })
            item.countries.map((filter) => {
                if(filterCountries.includes((Object.values(filter)).join())) return false
                filterCountries.push((Object.values(filter)).join())
            })
            if(filterYear.includes(item.year)) return false
            filterYear.push(item.year)
        })
        filterYear = filterYear.sort((a, b) => a - b).reverse()
        const allFilters = {
            genres: filterGenre,
            years: filterYear,
            countries: filterCountries
        }
        return allFilters
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
            
    //         )
    //     return }
    // async getAllMoviesAndRemoveDuplicate() {
    //     const movies = await this.moviesService.find()
        
    //     // let arr = []
    //     // for (let i = 0; i < movies.length; i++) {
    //     //     if(arr.includes(movies[i].name)) {
    //     //         await this.deleteOneMovie(movies[i]._id)
    //     //     } else {
    //     //         arr.push(movies[i].name)
    //     //     }
    //     // }
    //     console.log(movies.length)
    //     return movies;
    // }
}
