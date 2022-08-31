/* TODO:削除する */
export type JudgePokerWinnerResultsItem = {
    requestId: string,
    cards: string,
    role: string,
    strongest: boolean
}

export type JudgePokerWinnerErrorsItem = {
    requestId: string,
    cards: string
    messages: string[]
}

export type JudgePokerWinnerResponse = {
    results: JudgePokerWinnerResultsItem[]
    errors: JudgePokerWinnerErrorsItem[]
}