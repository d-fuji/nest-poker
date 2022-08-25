import { Body, Controller, Get, Post } from '@nestjs/common'
import { JudgePokerWinnerService } from './services/judge-poker-winner.service'
import { JudgePokerWinnerDto } from './dto/judge-poker-winner.dto'
import { JudgePokerWinnerResponse } from './responses/judge-poker-winner.response'
import { DistributeCardsService } from './services/distribute-cards.service'
import { DistributeCardsResponse } from './responses/distribute-cards.response'

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
