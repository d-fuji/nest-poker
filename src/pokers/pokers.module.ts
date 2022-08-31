/** Nest系 */
import { Module } from '@nestjs/common'

/** Controller系 */
import { PokersController } from './pokers.controller'

/** Service系 */
import { CreatePokerService } from './services/create-poker.service'
import { GetPokerService } from './services/get-poker.service'
import { GetPlayersService } from './services/get-players.service'
import { JoinPokerService } from './services/join-poker.service'
import { GetPlayerService } from './services/get-player.service'
import { ExchangeCardsService } from './services/exchange-cards.service'

/** TODO: 削除する */
import { DistributeCardsService } from './services/distribute-cards.service'
import { JudgePokerWinnerService } from './services/judge-poker-winner.service'

@Module({
  controllers: [PokersController],
  providers: [
    CreatePokerService,
    GetPokerService,
    GetPlayersService,
    JoinPokerService,
    GetPlayerService,
    ExchangeCardsService,
    JudgePokerWinnerService,
    DistributeCardsService
  ],
})
export class PokersModule {}