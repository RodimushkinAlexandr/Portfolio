import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {

  readonly username: string;

  readonly city: string;

  readonly genreMovies: string;
}