// Action
const INCREMENT = "project/counter/INCREMENT"
const DECREMENT = "project/counter/DECREMENT"

const initialState = {
    number: 0
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + 1
            }
        case DECREMENT:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}