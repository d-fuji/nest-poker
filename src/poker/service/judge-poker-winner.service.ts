import { Injectable } from '@nestjs/common'
import { JudgePokerWinnerDto } from '../dto/judge-poker-winner.dto'
import { JudgePokerWinnerResponse } from '../response/judge-poker-winner.response'

@Injectable()
export class JudgePokerWinnerService {
    exec(judgePokerWinnerDto: JudgePokerWinnerDto): JudgePokerWinnerResponse {
        const judgePokerWinnerResponse: JudgePokerWinnerResponse = {
            results: [],
            errors: []
        }
        return judgePokerWinnerResponse
    }
}