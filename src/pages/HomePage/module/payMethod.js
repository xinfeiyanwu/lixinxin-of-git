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

@connect(({PayMethodManager})=>({
  data: PayMethodManager.data,
}),null,null,{withRef:true})
class payMethod extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'PayMethodManager/queryPayMethodData',
        payload: {date:'week'},
      })
    }

    switchDate=(date)=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'PayMethodManager/queryPayMethodData',
        payload: {
          date
        }
      })
    }

    countTotal=(list)=>{
      let Total=0;
      list.forEach((value)=>{
        Total+=value.count;
      });
      return Total;
    }

    render() {
      const {data: {list}}=this.props;
      const { DataView } = DataSet;
      const { Html } = Guide;
      let totalData=`
                      <div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>
                        总消费<br>
                        <span style=&quot;color:#262626;font-size:2.5em&quot;>${this.countTotal(list)}</span>
                      </div>
                    `
                    
      const dv = new DataView();
      dv.source(list).transform({
        type: "percent",
        field: "count",
        dimension: "item",
        as: "percent"
      });
      const cols = {
        percent: {
          formatter: val => {
            val = (val * 100).toFixed(2) + "%";
            return val;
          }
        }
      };
      return (
        <div>
          <Chart
            height={400}
            data={dv}
            scale={cols}
            padding={[80, 180, 80, 10]}
            forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
            <Legend
              position="right"
              offsetY={0}
              offsetX={-100}
            />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Guide>
              <Html
                position={["50%", "50%"]}
                html={totalData}
                alignX="middle"
                alignY="middle"
              />
            </Guide>
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
      );
    }
}

export default payMethod;
