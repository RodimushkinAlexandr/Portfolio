import { IsEmail, IsString, Length } from "class-validator";
import {ObjectId} from "mongoose";


export class CreateFavoritesMovieDto {
    readonly favorites:string;
    readonly userId: ObjectId;
}