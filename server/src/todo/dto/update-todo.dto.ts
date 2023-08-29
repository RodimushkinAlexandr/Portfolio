import { IsNotEmpty } from "class-validator";


export class UpdateToDoDto {

    @IsNotEmpty()
    readonly complited: boolean;

    @IsNotEmpty()
    readonly selected: boolean;

    @IsNotEmpty()
    readonly text: boolean;

}

