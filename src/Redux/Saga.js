import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUser } from '../APIs';
import { USER_FETCH } from './CONSTANT';
import { fetchUserAction, fetchUserActionSucceeded, fetchUserActionFailed } from './Action';

function* fetchUserGenerate() {
    try {
        const user = yield call (fetchUser);
        yield put(fetchUserActionSucceeded(user));
    } catch (err) {
        yield put(fetchUserActionFailed(err));
    }
}

function* mySaga() {
    yield takeEvery(fetchUserAction, fetchUserGenerate);
}

export { mySaga };