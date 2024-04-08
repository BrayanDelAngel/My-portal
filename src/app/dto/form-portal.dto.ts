import { IsEmail,IsNumber,IsString } from "class-validator";


export class RequestEmailMyPortalDto {
    @IsEmail()
    email: string = '';
    @IsString()
    name:string='';
    @IsString()
    phone: string='';
    @IsString()
    message: string='';

}
