const INITIAL_STATE = {
    loggedInUser: null
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, loggedInUser: action.user }
        default:
            return state
    }
}