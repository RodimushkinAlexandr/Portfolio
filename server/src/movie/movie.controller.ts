import { Body, Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Model, ObjectId } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.tdo';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @Get()
    getAllMovies() {
        return this.movieService.getAllMovies()
    }

    @Get('/getFilters')
    getAllGenres() {
        return this.movieService.getAllFilters()
    }

    @Post('/filter')
    getGenreComedy(@Body() dto: CreateMovieDto) {
        return this.movieService.getMoviesFilter(dto)
    }

    @Get('/search')
    getOneMovieName(@Body() dto: CreateMovieDto) {
        return this.movieService.getOneMovieName(dto)
    }

    @Post('/One')
    addfavoritesMovie(@Body() id, idMovie) {
        return this.movieService.addfavoritesMovie(id, idMovie)
    }
}
