import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from 'src/movie/schemas/movie-schema';

export type UsersDocument = User & Document;

@Schema()
export class User {

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({default: ''})
  city: string

  @Prop({default: ''})
  genreMovies: string

  @Prop()
  favoritesMovies: string[]

  _id: mongoose.Types.ObjectId | string;
}

export const UsersSchema = SchemaFactory.createForClass(User);