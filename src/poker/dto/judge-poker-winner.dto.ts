import { MaxLength, MinLength } from 'class-validator';

export class JudgePokerWinnerDto {
    @MaxLength(4, {
        message: '4つの手札を入力してください',
      })
    @MinLength(4, {
        message: '4つの手札を入力してください',
      })
    hands: string[]
}