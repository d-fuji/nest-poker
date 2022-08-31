import { Injectable } from '@nestjs/common'
import { GetPlayerResponse } from '../responses/get-player.response';

@Injectable()
export class GetPlayerService {
  exec(poker_id: number, player_id: number): GetPlayerResponse {
    return {
      poker_id: poker_id,
      player_id: player_id
    }
  }
}