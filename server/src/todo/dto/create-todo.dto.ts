import { IsNotEmpty } from "class-validator";
import {ObjectId} from "mongoose";


export class CreateToDoDto {

    @IsNotEmpty()
    readonly title:string;

    @IsNotEmpty()
    readonly description:string;

    readonly userId: string;
}

