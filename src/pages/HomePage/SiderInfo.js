import React, { Component } from 'react';
import { connect } from 'dva';
import { 
  Layout,
  Row,
  Col,
  Icon,
  Avatar ,
 } from 'antd';

 import styles from './SiderInfo.less';

const {
  Header, Footer, Sider, Content,
} = Layout;

class HomePage extends Component {

  state={
    erer: 'rerere'
  }

  render() {
    //   console.log(styles)
    const updateInfo=[
        "软件更新通知2019-01-23",
        "首页界面显示优化",
        "计次卡套餐功能上线",
        "小程序授权功能",
        "优化会员列表、商品列表的配置读取",
        "调整微信线上会",
    ]
    
    return (
        <div className={styles.updateInfo}>
            <div>
                <Row className="updateNav">
                    <Col className="active" span={12}>消息提示</Col>
                    <Col className="marginLeft" span={12}></Col>
                </Row>
                <Row className="InfoCont">
                    {
                        updateInfo.map((value,key)=>{
                            return (
                                <p key={key}>
                                    {`${key}、${value};`}
                                </p>
                            )
                        })
                    }
                </Row>
            </div>
            <Row className="helpBox">
                <div className="helpInfo">
                    <Avatar size="64" icon="user" />
                    <ul className="contact">
                        <li>客服经理：@@ </li>
                        <li>服务热线：020-88888888</li>
                    </ul>
                </div>
            </Row>
        </div>
    )
  }
}

export default HomePage;
