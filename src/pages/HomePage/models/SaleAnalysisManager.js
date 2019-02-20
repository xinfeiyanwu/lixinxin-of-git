import { querySaleAnalysisData } from '@/services/HPModule';
export default {
    namespace: 'SaleAnalysisManager',
    state: {
        data: {},
        status: 'undefine',
        msg: '未初始化数据!',
    },
    effects: {
        *querySaleAnalysis({ payload }, { call, put }){
            const response=yield call(querySaleAnalysisData, payload);
            yield put({
                type: 'saveEmpSaleRankData',
                payload: response,
            })
        }
    },
    reducers: {
        saveEmpSaleRankData(state, { payload }){
            return {
                ...state,
                ...payload,
            }
        }
    }
}