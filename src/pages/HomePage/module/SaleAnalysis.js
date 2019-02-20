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
import CN from '@/locales/zh-CN/HomePage';
import styles from '@/pages/HomePage/HomePage.less';

@connect(({SaleAnalysisManager})=>({
  data: SaleAnalysisManager.data,
}),null,null,{withRef:true})
class SaleAnalysis extends Component {

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'SaleAnalysisManager/querySaleAnalysis',
        payload: {date: 'week'},
      })
    }

    switchDate=()=>{
      const {dispatch,date}=this.props;
      dispatch({
        type: 'SaleAnalysisManager/querySaleAnalysis',
        payload: {
          date
        },
      })
    }
    
    render() {
      const {
        date,
        data:{
          list
        }
      }=this.props;
      
      const cols = {
        date: {
          alias: "日期"
        },
        sales: { 
          alias: `${CN['HomePage.'+date]}销售图表分析`,
          min: 0,
          max: 100
        }
      };
      return (
        <div>
          <Chart height={400} data={list} scale={cols} padding={[50,200,50,50]} forceFit>
            <Axis
              name="date"
              title={null}
              tickLine={null}
              line={{
                stroke: "#E6E6E6"
              }}
            />
            <Axis
              name="sales"
              line={{stroke: "#E6E6E6"}}
              tickLine={null}
              grid={null}
              title={
                {
                  autoRotate: true,
                  offset: -50,
                  textStyle: {
                    fontSize: '12',
                    textAlign: 'center',
                    fill: 'red',
                    fontWeight: 'bold',
                    rotate: 0
                  }, // 坐标轴文本属性配置
                  position: 'end', // 标题的位置，**新增**
                }
              }
            />
            <Tooltip />
            
            {
              date=='today'?(
                  <Geom
                    type="point"
                    position="date*sales"
                    size={4}
                    shape={"circle"}
                    color='blue'
                    style={{
                      stroke: "#fff",
                      lineWidth: 1
                    }}
                  />
              ):(
                <Geom
                  type="line"
                  position="date*sales"
                  size={1}
                  color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
                  shape="smooth"
                  style={{
                    shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
                    shadowBlur: 60,
                    shadowOffsetY: 6
                  }}
                />
              )
            }
          </Chart>
        </div>
      );
    }
}

export default SaleAnalysis;
