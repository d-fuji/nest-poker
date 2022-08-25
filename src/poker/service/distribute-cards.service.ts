import { Injectable } from '@nestjs/common'
import { DistributeCardsResponse } from '../response/distribute-cards.response'

@Injectable()
export class DistributeCardsService {
    exec(): DistributeCardsResponse {
        // TODO: ランダムにカードを配布する
        const distributeCards: DistributeCardsResponse = {
            cards: 'h1,h2,h3,h4,h5'
        }
        return distributeCards
    }
}