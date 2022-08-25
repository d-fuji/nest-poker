import { Module } from '@nestjs/common'
import { PokerGameController } from './poker-game.controller'
import { DistributeCardsService } from './service/distribute-cards.service'
import { JudgePokerWinnerService } from './service/judge-poker-winner.service'

@Module({
  controllers: [PokerGameController],
  providers: [JudgePokerWinnerService, DistributeCardsService],
})
export class PokerGameModule {}