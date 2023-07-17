
export function login(user) {
    return (dispatch) => {
        dispatch({type: 'LOGIN', user})
    }
}