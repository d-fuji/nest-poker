/** TODO:削除する */
import { ArrayMaxSize, ArrayMinSize, IsArray } from 'class-validator';

export class JudgePokerWinnerDto {
    @IsArray({
      message: "配列で入力してください"
    })
    @ArrayMinSize(4, {
      message: "4つの手札を入力してください"
    })
    @ArrayMaxSize(4, {
      message: "4つの手札を入力してください"
    })
    hands: string[]
}