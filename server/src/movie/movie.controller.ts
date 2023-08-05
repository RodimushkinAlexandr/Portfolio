import { Body, Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Model, ObjectId } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.tdo';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    // @Post()
    // @UseInterceptors(FileFieldsInterceptor([
    //     { name: 'poster', maxCount: 1 },
    //   ]))
    // create(@UploadedFiles() files: { poster?: Express.Multer.File[]}, @Body() dto: CreateMovieDto) {
    //      const {poster} = files
    //      return this.movieService.create(dto, poster[0] )
    // }

    @Get()
    getAllMovies() {
        return this.movieService.getAllMovies()
    }

    @Get('/filter')
    getGenreComedy(@Body() dto: CreateMovieDto) {
        return this.movieService.getFilterComedy(dto)
    }

    @Get('/search')
    getOneMovieName(@Body() dto: CreateMovieDto) {
        return this.movieService.getOneMovieName(dto)
    }

    @Get(':id')
    getOneMovie(@Param('id') id: ObjectId) {
        return this.movieService.getOneMovie(id)
    }

    @Delete(':id')
    deleteOneMovie(@Param('id') id:ObjectId) {
        return this.movieService.deleteOneMovie(id)
    }

    @Post('/One')
    addfavoritesMovie(@Body() id, idMovie) {
        return this.movieService.addfavoritesMovie(id, idMovie)
    }
}
