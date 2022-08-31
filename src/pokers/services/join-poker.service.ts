import { Injectable } from '@nestjs/common'
import { JoinPokerResponse } from '../responses/join-poker.response'

@Injectable()
export class JoinPokerService {
  exec(poker_id: number): JoinPokerResponse {
    return {
      poker_id: poker_id
    }
  }
}