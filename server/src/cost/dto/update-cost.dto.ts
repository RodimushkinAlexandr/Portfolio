import { IsNotEmpty } from 'class-validator';

export class UpdateCostDto {

    @IsNotEmpty()
    readonly text: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly category: string;

    @IsNotEmpty()
    readonly data: Date;
}