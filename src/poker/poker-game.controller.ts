import { Body, Controller, Get, Post } from '@nestjs/common'
import { JudgePokerWinnerService } from './service/judge-poker-winner.service'
import { JudgePokerWinnerDto } from './dto/judge-poker-winner.dto'

@Controller()
export class PokerGameController {
    constructor(private judgePokerWinnerService: JudgePokerWinnerService){}

  @Get()
  distributeCards(): string {
    return "distribute cards for a user"
  }

  @Post()
  judgePokerWinner(@Body() judgePokerWinnerDto: JudgePokerWinnerDto): string {
    return this.judgePokerWinnerService.exec(judgePokerWinnerDto)
  }
}
