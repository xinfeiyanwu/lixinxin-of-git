import { queryHotShopRankData } from '@/services/HPModule';
export default{
    namespace: 'HotShopRankManager',
    state: {
        data: {
            list: []
        },
        status: 'undefine',
        msg: '未初始化数据!',
    },
    effects:{
        *queryHotShopRank({ payload }, { call, put }){
            console.log(111)
            const response=yield call(queryHotShopRankData, payload);
            yield put({
                type: 'saveHotShopRankData',
                payload: response,
            })
        }
    },
    reducers: {
        saveHotShopRankData(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }
}