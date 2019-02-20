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

@connect(({PayAnalysisManager})=>({
  data: PayAnalysisManager.data,
}),null,null,{withRef:true})
class PayAnalysis extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
            type: 'PayAnalysisManager/queryPayAnalysis',
            payload: {date:'week'}
      })
    }

    switchDate=(date)=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'PayAnalysisManager/queryPayAnalysis',
        payload: {
          date
        }
      })
    }

    render() {
      const {data:{list}}=this.props;
      const Col={
        sales:  {
          min: 0,
        }
      }
      
      return (
        <div>
          <Chart height={400} data={list} scale={Col}padding={[80,200,80,80]} forceFit>
            <Legend />
            <Axis name="date" />
            <Axis
              name="sales"
            />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom
              type="line"
              position="date*sales"
              size={2}
              color="#50e3c2"
            />
            <Geom
              type="point"
              position="date*sales"
              size={4}
              shape={"circle"}
              color="#50e3c2"
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
            />
          </Chart>
        </div>
      );
    }
}

export default PayAnalysis;
