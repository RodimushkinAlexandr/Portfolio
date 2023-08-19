import { IsNotEmpty } from "class-validator";


export class CreateToDoDto {

    @IsNotEmpty()
    readonly text:string;

    readonly userId: string;
}

