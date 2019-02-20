import React, { Component } from 'react';
import { 
  Row,
  Col,
 } from 'antd';
import { connect } from 'dva';
import styles from '@/pages/HomePage/HomePage.less';

//connect后ref无法正确获取到组件的state
@connect(({DefaultManager})=>({
  data: DefaultManager.data,
}),null,null,{withRef:true})
class Default extends Component {

    switchDate=(date)=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'DefaultManager/queryHPShopData',
        payload: {
          date
        }
      })
    }

    componentDidMount=()=>{
      const {dispatch}=this.props;
      dispatch({
        type: 'DefaultManager/queryHPShopData',
        payload: {
          date: 'today',
        }
      })
    }

    render() {
      const {list}=this.props.data;
      //console.log(list)
        
      return (
          <Row gutter={8}>
            {
              list.map((value) =>
                <Col key={value.key} span={4}>
                  <ul className={styles.headerInfo}>
                    <li className={styles.key} ref={styles.key}>
                      {value.key}
                    </li>
                    <li className={styles.num}>
                    {value.money}
                    </li>
                  </ul>
                </Col>
              )
            }
          </Row> 
      );
    }
}

export default Default;
