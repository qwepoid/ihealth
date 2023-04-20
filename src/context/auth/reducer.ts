import { Action } from "./types";

const reducer = (state, action) => {
    const newState = {...state}
    
    switch(action.type) {
        case Action.Login:
            newState.isLoggedIn = true;

            break;
        case Action.Logout:
            newState.isLoggedIn = false;    
        break;
    }
    return newState
}

export default reducer