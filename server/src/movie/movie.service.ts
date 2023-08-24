import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UsersDocument } from 'src/users/schema/user.schema';
import { Movie, MovieDocument } from './schemas/movie-schema';
import { HttpService } from '@nestjs/axios'
import { CreateMovieDto } from './dto/create-movie.tdo';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { kMaxLength } from 'buffer';
import { SearchMovieDto } from './dto/search-movie.dto';


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

    async searchNameMovie(dto: SearchMovieDto): Promise<Movie[]> {
        
        let movies = await this.getAllMovies()
            movies = movies.filter((movie) =>  movie.name.toLowerCase().indexOf(dto.name) >= 0)
        
        return movies
    }
 
    async getMoviesFilter(dto: FilterMovieDto): Promise<Movie[]> {
        
        let movies = await this.getAllMovies()

        if (dto.year) movies = movies.filter(movie => movie.year == dto.year)
        if (dto.genre)  movies = movies.filter(movie => movie.genres.map(genre => Object.values(genre).join()).includes(dto.genre))
        if (dto.country)  movies = movies.filter(movie => movie.countries.map(country => Object.values(country).join()).includes(dto.country))

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
