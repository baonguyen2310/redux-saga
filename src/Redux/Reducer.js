import { USER_FETCH, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from "./CONSTANT";
import { fetchUserAction } from "./Action";

const initialState = {
    user: 'baonguyen'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_FETCH_SUCCEEDED: {
            return {
                ...state,
                user: action.payload.title
            }
        }
        case USER_FETCH_FAILED: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export { reducer };