import {queryPayAnalysisDate} from "@/services/HPModule";
export default{
    namespace: "PayAnalysisManager",
    state: {
        data: {
            list: [],
        },
        status: 'underfine',
        msg: "未初始化数据",
    },
    effects: {
        *queryPayAnalysis({ payload }, { call, put }){
            const response=yield call(queryPayAnalysisDate,payload);
            yield put({
                type: 'savePayAnalysisDate',
                payload: response,
            })
        }
    },
    reducers: {
        savePayAnalysisDate(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }

}