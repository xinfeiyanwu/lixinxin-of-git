import { queryMemShopCompData } from '@/services/HPModule';
export default{
    namespace: 'MemShopCompManager',
    state: {
        data: {
            list: [],
            total: 0,
        },
        status: 'undefine',
        msg: '未初始化数据!',
    },
    effects:{
        *queryMemShopCompData({ payload }, { call, put }){
            const response=yield call(queryMemShopCompData, payload);
            yield put({
                type: 'saveMemShopCompData',
                payload: response,
            })
        }
    },
    reducers: {
        saveMemShopCompData(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }
}