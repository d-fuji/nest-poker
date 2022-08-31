import { Injectable } from '@nestjs/common'
import { GetPlayersResponse } from '../responses/get-players.response';

@Injectable()
export class GetPlayersService {
  exec(poker_id: number): GetPlayersResponse {
    return {
      poker_id: poker_id,
      players: ['player1', 'player2']
    }
  }
}