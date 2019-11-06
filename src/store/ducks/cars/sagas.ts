import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(api.get, "cars");
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
// import { all } from 'redux-saga/effects';

// export default function* rootSaga() {
//     yield all([]);
// }
