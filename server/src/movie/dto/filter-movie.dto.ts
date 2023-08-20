import { IsEmail, IsString, Length } from "class-validator";
import {ObjectId} from "mongoose";


export class FilterMovieDto {
    readonly genres:string[];
    readonly countries: string[];
    readonly year:string;
}