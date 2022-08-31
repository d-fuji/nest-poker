import { Injectable } from '@nestjs/common'
import { ExchangeCardsResponse } from '../responses/exchange-cards.response';

@Injectable()
export class ExchangeCardsService {
  exec(poker_id: number, player_id: number): ExchangeCardsResponse {
    return {
      poker_id: poker_id,
      player_id: player_id,
      cards: ['h1', 'h2', 'h3', 'h4', 'h5']
    }
  }
}