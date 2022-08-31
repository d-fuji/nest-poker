/** Nest系 */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

/** DTO系 */
import { CreatePokerDto } from './dto/create-poker.dto'

/** Response系 */
import { CreatePokerResponse } from './responses/create-poker.response'
import { GetPokerResponse } from './responses/get-poker.response'
import { GetPlayersResponse } from './responses/get-players.response'
import { JoinPokerResponse } from './responses/join-poker.response'
import { GetPlayerResponse } from './responses/get-player.response'
import { ExchangeCardsResponse } from './responses/exchange-cards.response'

/** Service系 */
import { CreatePokerService } from './services/create-poker.service'
import { GetPokerService } from './services/get-poker.service'
import { GetPlayersService } from './services/get-players.service'
import { JoinPokerService } from './services/join-poker.service'
import { GetPlayerService } from './services/get-player.service'
import { ExchangeCardsService } from './services/exchange-cards.service'


@Controller('pokers')
export class PokersController {
  constructor(
    private createPokerService: CreatePokerService,
    private getPokerService: GetPokerService,
    private getPlayersService: GetPlayersService,
    private joinPokerService: JoinPokerService,
    private getPlayerService: GetPlayerService,
    private exchangeCardsService: ExchangeCardsService
      // private distributeCardsService: DistributeCardsService,
      // private judgePokerWinnerService: JudgePokerWinnerService
    ) { }

  // ポーカー作成
  @Post()
  createPoker(@Body() createPokerDto: CreatePokerDto): CreatePokerResponse {
    return this.createPokerService.exec(createPokerDto)
  }

  // ポーカー情報取得
  @Get(':poker_id')
  getPoker(@Param() params): GetPokerResponse {
    return this.getPokerService.exec(params.poker_id)
  }
  
  // プレイヤー一覧取得
  @Get(':poker_id/players')
  getPlayers(@Param() params): GetPlayersResponse {
    return this.getPlayersService.exec(params.poker_id)
  }

  // プレイヤー作成 (= バトル参加)
  @Post(':poker_id/players')
  joinPoker(@Param() params): JoinPokerResponse {
    return this.joinPokerService.exec(params.poker_id)
  }

  // プレイヤー情報取得
  @Get(':poker_id/players/:player_id')
  getPlayer(@Param() params): GetPlayerResponse {
    return this.getPlayerService.exec(params.poker_id, params.player_id)
  }

  // プレイヤー手札交換
  @Put(':poker_id/players/:player_id')
  exchangeCards(@Param() params): ExchangeCardsResponse {
    return this.exchangeCardsService.exec(params.poker_id, params.player_id)
  }







  // @Get('get')
  // distributeCards(): DistributeCardsResponse {
  //   return this.distributeCardsService.exec()
  // }

  // @Post('judge')
  // judgePokerWinner(@Body() judgePokerWinnerDto: JudgePokerWinnerDto): JudgePokerWinnerResponse {
  //   return this.judgePokerWinnerService.exec(judgePokerWinnerDto)
  // }
}
