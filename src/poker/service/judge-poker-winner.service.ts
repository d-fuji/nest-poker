import { Injectable } from '@nestjs/common'
import { JudgePokerWinnerDto } from '../dto/judge-poker-winner.dto'

@Injectable()
export class JudgePokerWinnerService {
    exec(judgePokerWinnerDto: JudgePokerWinnerDto): string {
        console.log(judgePokerWinnerDto)
        return judgePokerWinnerDto.hands[0]
    }
}