import { IsNotEmpty } from 'class-validator';
import { Movie } from 'src/movie/schemas/movie-schema';

export class UpdateUserDto {

  readonly username: string;

  readonly city: string;

  readonly genreMovies: string;

}