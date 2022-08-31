import { Injectable } from '@nestjs/common'
import { GetPokerResponse } from '../responses/get-poker.response';

@Injectable()
export class GetPokerService {
  exec(poker_id: number): GetPokerResponse {
    return {
      poker_id: poker_id
    }
  }
}