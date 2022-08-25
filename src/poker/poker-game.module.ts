import { Module } from '@nestjs/common'
import { PokerGameController } from './poker-game.controller'
import { JudgePokerWinnerService } from './service/judge-poker-winner.service'

@Module({
  controllers: [PokerGameController],
  providers: [JudgePokerWinnerService],
})
export class PokerGameModule {}