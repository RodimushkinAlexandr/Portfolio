import { Body, Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Model, ObjectId } from 'mongoose';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { SearchMovieDto } from './dto/search-movie.dto'
import { GroupMovieDto } from './dto/group-movie.dto';


@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @Get()
    getAllMovies() {
        return this.movieService.getAllMovies()
    }
    @Post('/groupMovies')
    getAll(@Body() groupMovieDto: GroupMovieDto) {
        return this.movieService.getMovirsGroup(groupMovieDto)
    }

    @Delete(':id')
    async deleteCost(@Param('id') id: string) {
      return await this.movieService.deleteOneMovie(id);
    }

    @Get('/getFilters')
    getAllGenres() {
        return this.movieService.getAllFilters()
    }

    @Post('/filter')
    getGenreComedy(@Body() dto: FilterMovieDto) {
        return this.movieService.getMoviesFilter(dto)
    }

    @Post('/search')
    searchNameMovie(@Body() dto: SearchMovieDto) {
        return this.movieService.searchNameMovie(dto)
    }
    
}
