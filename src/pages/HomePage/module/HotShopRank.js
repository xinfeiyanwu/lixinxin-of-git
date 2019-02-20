import React, { Component } from 'react';
import { 
  Row,
  Col,
 } from 'antd';
import { connect } from 'dva';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";
import styles from '@/pages/HomePage/HomePage.less';

@connect(({HotShopRankManager})=>({
  data: HotShopRankManager.data,
}),null,null,{withRef:true})
class HotShopRank extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
            type: 'HotShopRankManager/queryHotShopRank',
            payload: {date:'week'}
      })
    }

    switchDate=(date)=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'HotShopRankManager/queryHotShopRank',
        payload: {
          date
        }
      })
    }

    render() {
      const {data:{list}}=this.props;
      const ds = new DataSet();
      const dv = ds.createView().source(list);
      dv.transform({
        type: "fold",
        fields: ["短袖", "长袖", "毛衣", "鞋子", "皮鞋", "裙子", "高跟鞋", "袜子"],
        // 展开字段集
        key: "类型",
        // key字段
        value: "销售量" // value字段
      });
      return (
        <div>
          <Chart height={400} data={dv} padding={[80,200,80,80]} forceFit>
            <Axis name="类型" />
            <Axis name="销售量" />
            <Legend position='top' offsetX={100}/>
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="interval"
              position="类型*销售量"
              color={"name"}
              adjust={[
                {
                  type: "dodge",
                  marginRatio: 1 / 32
                }
              ]}
            />
          </Chart>
        </div>
      );
    }
}

export default HotShopRank;
