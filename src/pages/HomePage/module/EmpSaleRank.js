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

// @connect(({EmpSaleRankManager})=>({
//   data: EmpSaleRankManager.data,
// }))
class EmpSaleRank extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount=()=>{
    //   const {dispatch}=this.props;
    //   dispatch({
    //     type: 'DefaultManager/queryHPModuleData',
    //   })
    // }

    render() {
        const data = [
            {
              year: "1951 年",
              sales: 38
            },
            {
              year: "1952 年",
              sales: 52
            },
            {
              year: "1956 年",
              sales: 61
            },
            {
              year: "1957 年",
              sales: 145
            },
            {
              year: "1958 年",
              sales: 48
            },
            {
              year: "1959 年",
              sales: 38
            },
            {
              year: "1960 年",
              sales: 38
            },
            {
              year: "1962 年",
              sales: 38
            }
          ];
          const cols = {
            sales: {
              tickInterval: 20
            }
          };
          return (
            <div>
              <Chart height={400} data={data} scale={cols} padding={[80,200,80,80]} forceFit>
                <Axis name="year" />
                <Axis name="sales" />
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="interval" position="year*sales" />
              </Chart>
            </div>
          );
    }
}

export default EmpSaleRank;
