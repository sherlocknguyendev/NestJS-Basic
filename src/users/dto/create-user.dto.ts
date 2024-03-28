
import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    name: string;

    address: string;

    @IsString()
    phone: string;

    @IsString()
    age: number;
}
