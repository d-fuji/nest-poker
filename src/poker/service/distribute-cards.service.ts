import { Injectable } from '@nestjs/common'
import { DistributeCardsResponse } from '../response/distribute-cards.response'
import { generateRamdomPokerCards } from '../utils/distribute-cards.utils'

@Injectable()
export class DistributeCardsService {
    exec(): DistributeCardsResponse {

        const randomPokerCards: string = generateRamdomPokerCards()
        
        const distributeCards: DistributeCardsResponse = {
            cards: randomPokerCards
        }

        return distributeCards
    }
}