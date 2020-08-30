const INITIAL_STATE = {
    num1: 5,
    num2: 0
}

const rootReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "CHANGE_NUM":
            return {
                ...state, [action.num]: action.value
            }

            default:
                return state;
    }
}

export default rootReducer