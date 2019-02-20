import {queryMemShopRankDate} from "@/services/HPModule";
export default{
    namespace: "MemShopRankManager",
    state: {
        data: {
            list: [],
        },
        status: 'underfine',
        msg: "未初始化数据",
    },
    effects: {
        *queryMemShopRank({ payload }, { call, put }){
            const response=yield call(queryMemShopRankDate,payload);
            yield put({
                type: 'saveMemShopRankDate',
                payload: response,
            })
        }
    },
    reducers: {
        saveMemShopRankDate(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }

}