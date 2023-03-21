export function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivide25':
            return { ...state, number: state.number / 25 }
        case 'numberParseInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberSumFree':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}
