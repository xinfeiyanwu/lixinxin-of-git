import React, { Component } from 'react';
import { 
  Row,
  Col,
 } from 'antd';
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
import { connect } from 'dva';
import styles from '@/pages/HomePage/HomePage.less';

@connect(({MemShopRankManager})=>({
  data: MemShopRankManager.data,
}),null,null,{withRef:true})
class MemShopRank extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'MemShopRankManager/queryMemShopRank',
        payload: {date:'week'}
      })
    }

    switchDate=(date)=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'MemShopRankManager/queryMemShopRank',
        payload: {
          date
        }
      })
    }

    render() {
      const {data:{list}}=this.props;
      const cols = {
        consumers: {
          alias: '消费者'
        },
        ConsAmount: {
          alias: '销售额'
        }
      };
      return (
        <div>
          <Chart height={400} data={list} scale={cols} padding={[80,200,80,80]} forceFit>
            <Axis name="consumers"/>
            <Axis name="ConsAmount" />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="interval" position="consumers*ConsAmount" />
          </Chart>
        </div>
      );
    }
}

export default MemShopRank;
