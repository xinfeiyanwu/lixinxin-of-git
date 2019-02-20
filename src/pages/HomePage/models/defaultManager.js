import { queryHPShopData } from '@/services/HPModule';
export default{
    namespace: 'DefaultManager',
    state: {
        data: {
            list: []
        },
        status: 'undefine',
        msg: '未初始化数据!',
    },
    effects:{
        *queryHPShopData({ payload }, { call, put }){
            const response=yield call(queryHPShopData, payload);
            yield put({
                type: 'saveHPShopData',
                payload: response,
            })
        }
    },
    reducers: {
        saveHPShopData(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }
}