import { Injectable } from '@nestjs/common'
import { CreatePokerDto } from '../dto/create-poker.dto'
import { Paticipant, CreatePokerResponse } from '../responses/create-poker.response'

@Injectable()
export class CreatePokerService {
  exec(createPokerDto:CreatePokerDto): CreatePokerResponse {
    console.log(createPokerDto)
    const paticipant1: Paticipant = {
      id: 1,
      gameId: 1,
      name: "参加者1",
      cards: "h1,h2,h3,h4,h5",
      timesOfExchange: 0,
      role: null,
      isWinner: null
    }
    const paticipant2: Paticipant = {
      id: 2,
      gameId: 1,
      name: "参加者2",
      cards: "s1,s2,s3,s4,s5",
      timesOfExchange: 0,
      role: null,
      isWinner: null
    }
    const paticipant3: Paticipant = {
      id: 3,
      gameId: 1,
      name: "参加者3",
      cards: "h9,h10,h11,h12,h13",
      timesOfExchange: 0,
      role: null,
      isWinner: null
    }
    const startPokerGameResponse: CreatePokerResponse = {
      gameId: 1,
      numberOfPaticipants: 3,
      firstPaticipant: paticipant1,
      paticipants: [paticipant1, paticipant2, paticipant3]
    }
    return startPokerGameResponse
  }

}