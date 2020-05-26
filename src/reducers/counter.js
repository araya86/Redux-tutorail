// Action
const INCREMENT = "project/counter/INCREMENT"
const DECREMENT = "project/counter/DECREMENT"

const initialState = {
    number: 0,
    clickOn: null
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + 1,
                clickOn: action.clickOn
            }
        case DECREMENT:
            return {
                number: state.number - 1,
                clickOn: action.clickOn
            }
        default:
            return state
    }
}

export function increment(clickOn) {
    return {
        type: INCREMENT,
        clickOn: clickOn
    }
}

export function decrement(clickOn) {
    return {
        type: DECREMENT,
        clickOn: clickOn
    }
}