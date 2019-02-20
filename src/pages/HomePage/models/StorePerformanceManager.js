import {queryStorePerformanceDate} from "@/services/HPModule";
export default{
    namespace: "StorePerformanceManager",
    state: {
        data: {
            list: [],
        },
        status: 'underfine',
        msg: "未初始化数据",
    },
    effects: {
        *queryStorePerformance({ payload }, { call, put }){
            const response=yield call(queryStorePerformanceDate,payload);
            yield put({
                type: 'saveStorePerformanceDate',
                payload: response,
            })
        }
    },
    reducers: {
        saveStorePerformanceDate(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }

}