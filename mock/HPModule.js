export default {
  'GET /HomePage/HPModule/getHPShopData': getHPShopData,
  'GET /HomePage/HPModule/getSaleAnalysisData': getSaleAnalysisData,
  'GET /HomePage/HPModule/getMemShopCompData': getMemShopCompData,
  'GET /HomePage/HPModule/getPayMethodData': getPayMethodData,
  'GET /HomePage/HPModule/getStorePerformanceDate': getStorePerformanceDate,
  'GET /HomePage/HPModule/getMemShopRankDate': getMemShopRankDate,
  'GET /HomePage/HPModule/getHotShopRankData': getHotShopRankData,
  'GET /HomePage/HPModule/getPayAnalysisData': getPayAnalysisData,
}

//商店销售额
const shopDatasource={
  today: [
    {
      key: "综合收入",
      money: 100,
    },
    {
      key: "散客消费",
      money: 100,
    },
    {
      key: "会员消费",
      money: 100,
    },
    {
      key: "成交笔数",
      money: 100,
    },
    {
      key: "优惠金额",
      money: 100,
    },
    {
      key: "退款",
      money: 100,
    },
  ],
  week: [
    {
      key: "综合收入",
      money: 1000,
    },
    {
      key: "散客消费",
      money: 1000,
    },
    {
      key: "会员消费",
      money: 1000,
    },
    {
      key: "成交笔数",
      money: 1000,
    },
    {
      key: "优惠金额",
      money: 1000,
    },
    {
      key: "退款",
      money: 1000,
    },
  ],
  month: [
    {
      key: "综合收入",
      money: 2000,
    },
    {
      key: "散客消费",
      money: 2000,
    },
    {
      key: "会员消费",
      money: 2000,
    },
    {
      key: "成交笔数",
      money: 2000,
    },
    {
      key: "优惠金额",
      money: 2000,
    },
    {
      key: "退款",
      money: 2000,
    },
  ]
}
function getHPShopData(req, res) {
  const params = req.query;
  const result = 
    {
      data: {
        list: shopDatasource[params.date],
      },
      status: '200',
      msg: 'success!',
    }
  return res.json(result);
}

//销售分析
const SaleAnaDatasource={
  today: [
    {
      date: "02-10",
      sales: 45
    },
  ],
  week: [
    {
      date: "02-04",
      sales: 34.0
    },
    {
      date: "02-05",
      sales: 76.0
    },
    {
      date: "02-06",
      sales: 44.0
    },
    {
      date: "02-07",
      sales: 92.0
    },
    {
      date: "02-08",
      sales: 33.0
    },
    {
      date: "02-09",
      sales: 93.0
    },
    {
      date: "02-10",
      sales: 49.0
    },
  ],
  month: [
    {
      date: "02-01",
      sales: 43.0
    },
    {
      date: "02-02",
      sales: 22.0
    },
    {
      date: "02-03",
      sales: 63.0
    },
    {
      date: "02-04",
      sales: 84.0
    },
    {
      date: "02-05",
      sales: 20.0
    },
    {
      date: "02-06",
      sales: 84.0
    },
    {
      date: "02-07",
      sales: 67.0
    },
    {
      date: "02-08",
      sales: 33.0
    },
    {
      date: "02-09",
      sales: 23.0
    },
    {
      date: "02-10",
      sales: 76.0
    },
  ],
}
function getSaleAnalysisData(req, res){
  const params = req.query;
  const result = 
    {
      data: {
        list: SaleAnaDatasource[params.date],
      },
      status: '200',
      msg: 'success!',
    }
  return res.json(result);
}

//会员组成
const MemShipcompDatasource=[
  {
    item: "白卡",
    count: 40
  },
  {
    item: "普通会员",
    count: 21
  },
  {
    item: "金卡",
    count: 17
  },
  {
    item: "黄金股东",
    count: 13
  },
  {
    item: "砖石会员",
    count: 9
  },
  {
    item: "VIP金卡",
    count: 9
  }
]
function getMemShopCompData(req, res){
  const result = {
    data: {
      list: MemShipcompDatasource,
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}

//会员消费排行榜
const MemShopRankDatasource={
  today: [
    {
      consumers: "李白",
      ConsAmount: 38
    }
  ],
  week: [
    {
      consumers: "李白",
      ConsAmount: 38
    },
    {
      consumers: "杜甫",
      ConsAmount: 20
    }
  ],
  month: [
    {
      consumers: "李白",
      ConsAmount: 38
    },
    {
      consumers: "杜甫",
      ConsAmount: 20
    },
    {
      consumers: "爱因斯坦",
      ConsAmount: 10
    },
    {
      consumers: "李清照",
      ConsAmount: 5
    }
  ],

}
function getMemShopRankDate(req, res){
  const params = req.query;
  const result = {
    data: {
      list: MemShopRankDatasource[params.date],
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}

//热销商品排行
const HotShopRankDatasource={
  today: [
    {
      name: "售出",
      "短袖": 18.9,
      "长袖": 28.8,
      "毛衣": 39.3,
      "鞋子": 81.4,
      "皮鞋": 47,
      "裙子": 20.3,
      "高跟鞋": 24,
      "袜子": 35.6
    },
    {
      name: "退回",
      "短袖": 1,
      "长袖": 0,
      "毛衣": 4,
      "鞋子": 1,
      "皮鞋": 2,
      "裙子": 6,
      "高跟鞋": 0,
      "袜子": 5
    }
  ],
  week: [
    {
      name: "售出",
      "短袖": 324,
      "长袖": 634,
      "毛衣": 733,
      "鞋子": 123,
      "皮鞋": 534,
      "裙子": 867,
      "高跟鞋": 232,
      "袜子": 424
    },
    {
      name: "退回",
      "短袖": 6,
      "长袖": 7,
      "毛衣": 12,
      "鞋子": 9,
      "皮鞋": 11,
      "裙子": 8,
      "高跟鞋": 2,
      "袜子": 19
    }
  ],
  month: [
    {
      name: "售出",
      "短袖": 1111,
      "长袖": 5522,
      "毛衣": 6312,
      "鞋子": 2234,
      "皮鞋": 867,
      "裙子": 6732,
      "高跟鞋": 7342,
      "袜子": 6234
    },
    {
      name: "退回",
      "短袖": 16,
      "长袖": 43,
      "毛衣": 24,
      "鞋子": 12,
      "皮鞋": 25,
      "裙子": 67,
      "高跟鞋": 93,
      "袜子": 28
    }
  ],
}
function getHotShopRankData(req, res){
  const params = req.query;
  const result = {
    data: {
      list: HotShopRankDatasource[params.date],
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}

//店铺业绩
const StorePerformanceDatasource={
  today: [
    {
      item: "会员消费",
      count: 160
    },
    {
      item: "散客消費",
      count: 40
    },
  ],
  week: [
    {
      item: "会员消费",
      count: 1260
    },
    {
      item: "散客消費",
      count: 430
    },
  ],
  month: [
    {
      item: "会员消费",
      count: 5605
    },
    {
      item: "散客消費",
      count: 3240
    },
  ],
}
function getStorePerformanceDate(req, res){
  const params = req.query;
  const result = {
    data: {
      list: StorePerformanceDatasource[params.date],
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}

//支付方式
const PayMethodDatasource={
  today: [
    {
      item: "储值卡",
      count: 100
    },
    {
      item: "现金",
      count: 50
    },
    {
      item: "银行卡",
      count: 200
    },
  ],
  week: [
    {
      item: "储值卡",
      count: 200
    },
    {
      item: "现金",
      count: 350
    },
    {
      item: "银行卡",
      count: 400
    },
  ],
  month: [
    {
      item: "储值卡",
      count: 4400
    },
    {
      item: "现金",
      count: 5210
    },
    {
      item: "银行卡",
      count: 2010
    },
  ],
}
function getPayMethodData(req, res){
  const params = req.query;
  const result = {
    data: {
      list: PayMethodDatasource[params.date],
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}

//支付分析
const PayAnalysisDatasource={
  today: [
    
    {
      date: "02-13",
      sales: 12.0,
    },
  ],
  week: [
    {
      date: "02-11",
      sales: 4.0,
    },
    {
      date: "02-12",
      sales: 15.0,
    },
    {
      date: "02-13",
      sales: 12.0,
    },
  ],
  month: [
    {
      date: "02-07",
      sales: 18.0,
    },
    {
      date: "02-08",
      sales: 15.0,
    },
    {
      date: "02-09",
      sales: 3.0,
    },
    {
      date: "02-10",
      sales: 7.0,
    },
    {
      date: "02-11",
      sales: 4.0,
    },
    {
      date: "02-12",
      sales: 15.0,
    },
    {
      date: "02-13",
      sales: 12.0,
    },
  ],
}
function getPayAnalysisData(req, res){
  const params = req.query;
  const result = {
    data: {
      list: PayAnalysisDatasource[params.date],
    },
    status: '200',
    msg: 'success!',
  }
  return res.json(result);
}