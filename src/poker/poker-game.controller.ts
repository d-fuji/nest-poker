import { Body, Controller, Get, Post } from '@nestjs/common'
import { JudgePokerWinnerService } from './service/judge-poker-winner.service'
import { JudgePokerWinnerDto } from './dto/judge-poker-winner.dto'
import { JudgePokerWinnerResponse } from './response/judge-poker-winner.response'
import { DistributeCardsService } from './service/distribute-cards.service'
import { DistributeCardsResponse } from './response/distribute-cards.response'

@Controller()
export class PokerGameController {
    constructor(
      private judgePokerWinnerService: JudgePokerWinnerService,
      private distributeCardsService: DistributeCardsService
    ){}

  @Get()
  distributeCards(): DistributeCardsResponse {
    return this.distributeCardsService.exec()
  }

  @Post()
  judgePokerWinner(@Body() judgePokerWinnerDto: JudgePokerWinnerDto): JudgePokerWinnerResponse {
    return this.judgePokerWinnerService.exec(judgePokerWinnerDto)
  }
}
