import {  IsInt, IsString } from 'class-validator';

export class CreatePokerDto {
  @IsString()
  paticipant_name: string

  @IsInt()
  number_of_paticipants: number
}