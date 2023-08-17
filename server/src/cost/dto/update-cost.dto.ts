import { IsNotEmpty } from 'class-validator';

export class UpdateCostDto {

    readonly comment: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly category:string

    @IsNotEmpty()
    readonly date: Date;
}