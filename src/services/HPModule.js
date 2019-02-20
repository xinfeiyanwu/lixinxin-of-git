import { stringify } from 'qs';
import request from '@/utils/request';

//商店销售额
export async function queryHPShopData(params) {
  return request(`/HomePage/HPModule/getHPShopData?${stringify(params)}`);
}

//销售分析
export async function querySaleAnalysisData(params) {
  return request(`/HomePage/HPModule/getSaleAnalysisData?${stringify(params)}`);
}

//会员组成
export async function queryMemShopCompData(params) {
  return request(`/HomePage/HPModule/getMemShopCompData?${stringify(params)}`);
}

//会员消费排行榜
export async function queryMemShopRankDate(params) {
  return request(`/HomePage/HPModule/getMemShopRankDate?${stringify(params)}`);
}

//热销商品排行
export async function queryHotShopRankData(params) {
  return request(`/HomePage/HPModule/getHotShopRankData?${stringify(params)}`);
}

//店铺业绩
export async function queryStorePerformanceDate(params) {
  return request(`/HomePage/HPModule/getStorePerformanceDate?${stringify(params)}`);
}

//支付方式
export async function queryPayMethodData(params) {
  return request(`/HomePage/HPModule/getPayMethodData?${stringify(params)}`);
}

//支付分析
export async function queryPayAnalysisDate(params) {
  return request(`/HomePage/HPModule/getPayAnalysisData?${stringify(params)}`);
}

