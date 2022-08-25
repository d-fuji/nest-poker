
export type JudgePokerWinnerResultsItem = {
    requestId: string,
    cards: string,
    yaku: string,
    strongest: boolean
}

export type JudgePokerWinnerErrorsItem = {
    requestId: string,
    cards: string
    errorMessages: string[]
}

export type JudgePokerWinnerResponse = {
    results: JudgePokerWinnerResultsItem[]
    errors: JudgePokerWinnerErrorsItem[]
}