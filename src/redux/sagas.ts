// import { call, put, takeLatest, all } from "redux-saga/effects";
// import { fetchProducts } from "../utils/api";
// import { SagaIterator } from "redux-saga";
// import {
//     fetchRequest, 
//     fetchSuccess, 
//     fetchFailure
// } from '../features/apiSlice'

// export function* fetchSaga(): SagaIterator {
//     try{
//        const data = yield call(fetchProducts);
//         yield put(fetchSuccess(data.products));
//     }
//     catch(e){
//         yield put(fetchFailure(e));
//     }
// }
// export function* postsSaga(){
//     yield takeLatest(fetchRequest.type, fetchSaga)
// }

// export function* rootSaga(){
//     yield all([
//         postsSaga(),
//     ]);
// }