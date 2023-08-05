import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { Movie } from 'src/movie/schemas/movie-schema';
import { User } from 'src/users/schema/users.schema';


export type FavoritesMoviesDocument = FavoritesMovies & Document;

@Schema()
export class FavoritesMovies {
    
  @Prop()
  genreName: string;

  @Prop()
  genreId: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]})
  movies: Movie[];
}

export const FavoritesMoviesSchema = SchemaFactory.createForClass(FavoritesMovies);