import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCostDto {

    readonly comment: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly category:string

    @IsNotEmpty()
    readonly date: Date;

    @IsOptional()
    readonly userId: string;
}