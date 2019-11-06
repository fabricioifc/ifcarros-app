import { all, takeLatest } from "redux-saga/effects";
import { CarTypes } from "./cars/types";
import { load } from "./cars/sagas";
// import { CarTypes } from "./types";
// import { load } from "./sagas";

export default function* rootSaga() {
  return yield all([takeLatest(CarTypes.LOAD_REQUEST, load)]);
}
