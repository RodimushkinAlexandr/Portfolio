import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsString({message: 'Должно быть строкой'})
    @IsEmail({},{message: 'Не корректный mail'})
    readonly email: string;

    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16 символов'})
    readonly password: string;
    
    @IsString({message: 'Должно быть строкой'})
    @Length(0, 20, {message: 'Не меньше 4 и не больше 20 символов'})
    readonly cityWeather: string;
}