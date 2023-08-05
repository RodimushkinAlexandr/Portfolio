import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { FavoritesMovies } from 'src/favorites-movies/schema/favorites-movies.schema';
import { Movie } from 'src/movie/schemas/movie-schema';
import { ToDo } from 'src/todo/schemas/todo.schemas';


export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop({unique: true, allowNull: false })
  email: string;

  @Prop()
  password: string;

  @Prop()
  cityWeather: string

  @Prop()
  favoritesMovies: string[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'ToDo'}]})
  todo: ToDo[];
}

export const UsersSchema = SchemaFactory.createForClass(User);