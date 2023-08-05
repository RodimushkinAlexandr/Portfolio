import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { FavoritesMoviesService } from './favorites-movies.service';

@Controller('genre')
export class FavoritesMoviesController {

    constructor(private favoritesMoviesService: FavoritesMoviesService) {}

    @Get()
    getAllfavoritesMovies() {
        return this.favoritesMoviesService.getAllFavoritesMovies()
    }

    @Delete(':id')
    deleteGenreMovies(@Param('id') id: ObjectId) {
        return this.favoritesMoviesService.deleteFavoritesMovies(id)
    }

}
