export type Paticipant = {
  id: number
  gameId: number
  name: string
  cards: string
  timesOfExchange: number
  role: string | null
  isWinner: boolean | null
}

export type CreatePokerResponse = {
  gameId: number
  numberOfPaticipants: number
  firstPaticipant: Paticipant
  paticipants: Paticipant[]
}