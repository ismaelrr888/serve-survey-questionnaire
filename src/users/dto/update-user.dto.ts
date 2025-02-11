import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly username?: string;

  @IsString()
  readonly password?: string;

  @IsString()
  @IsEmail()
  readonly email?: string;
}
