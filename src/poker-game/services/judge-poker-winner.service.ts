import { Injectable } from '@nestjs/common'
import { JudgePokerWinnerDto } from '../dto/judge-poker-winner.dto'
import { JudgePokerWinnerResponse, JudgePokerWinnerResultsItem, JudgePokerWinnerErrorsItem } from '../responses/judge-poker-winner.response'
import { judgePokerRole, judgePokerWinner, validatePokerCards } from '../utils/judge-poker-winner.utils'

@Injectable()
export class JudgePokerWinnerService {
    exec(judgePokerWinnerDto: JudgePokerWinnerDto): JudgePokerWinnerResponse {

        const judgePokerWinnerResults: JudgePokerWinnerResultsItem[] = []
        const judgePokerWinnerErrors: JudgePokerWinnerErrorsItem[] = []

        // TODO: ここでH21とかをバリデーション（入出力の方は設計が必要、極力ループとかコードが冗長になるものはutilsに入れておきたい）
        validatePokerCards()

        // TODO: 個別で役判定（入出力の方は設計が必要、極力ループとかコードが冗長になるものはutilsに入れておきたい）
        judgePokerRole()

        // TODO: 勝者の判定（入出力の方は設計が必要、極力ループとかコードが冗長になるものはutilsに入れておきたい）
        judgePokerWinner()

        // NOTE: 値の組み立て
        const judgePokerWinnerResponse: JudgePokerWinnerResponse = {
            results: judgePokerWinnerResults,
            errors: judgePokerWinnerErrors
        }

        return judgePokerWinnerResponse
    }
}