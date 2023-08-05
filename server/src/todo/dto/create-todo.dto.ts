import { IsEmail, IsString, Length } from "class-validator";
import {ObjectId} from "mongoose";


export class CreateToDoDto {

    @Length(1, 40, {message: 'Не меньше 1 и не больше 30 символов'})
    readonly title:string;

    @Length(1, 40, {message: 'Не меньше 1 и не больше 60 символов'})
    readonly description:string;

    readonly userId: ObjectId;
}