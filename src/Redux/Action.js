import { USER_FETCH, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from './CONSTANT';
const fetchUserAction = (payload) => {
    return {
        type: USER_FETCH,
        payload: payload
    }
}
const fetchUserActionSucceeded = (payload) => {
    return {
        type: USER_FETCH_SUCCEEDED,
        payload: payload
    }
}
const fetchUserActionFailed = (payload) => {
    return {
        type: USER_FETCH_FAILED,
        payload: payload
    }
}

export { fetchUserAction, fetchUserActionSucceeded, fetchUserActionFailed };