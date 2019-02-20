import {queryPayMethodData} from "@/services/HPModule";
export default{
    namespace: "PayMethodManager",
    state: {
        data: {
            list: []
        },
        status: 'underfine',
        msg: '未初始化数据',
    },
    effects: {
        *queryPayMethodData({ payload }, { call, put }){
            const responese=yield call(queryPayMethodData, payload);
            yield put({
                type: 'savePayMethodData',
                payload: responese
            })
        }
    },
    reducers: {
        savePayMethodData(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }

}