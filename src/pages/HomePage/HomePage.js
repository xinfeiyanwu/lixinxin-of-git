import React, { Component } from 'react';
import { connect } from 'dva';
import { 
  Layout,
  Row,
  Col,
  Icon,
  Modal,
 } from 'antd';
 import SiderInfo from './SiderInfo'
 import HomePageModule from './HomePageModule'

 import styles from './HomePage.less';

const {
  Header, Footer, Sider, Content,
} = Layout;

class HomePage extends Component {
  constructor(props) {
    super(props);
    //用来保存未确定module增删修改状态
    this.modStaStorage={
      //不可修改
      Default: true,
      SaleAnalysis: true,
      MemShopComp: true,
      MemShopRank: true,
      HotShopRank: true,
      StorePerformance: true,
      EmpSaleRank: true,
      payMethod: true,
      PayAnalysis: true,
    };
    this.state={
      moduleState: {
        //不可修改
        Default: true,
        SaleAnalysis: true,
        MemShopComp: true,
        MemShopRank: true,
        HotShopRank: true,
        StorePerformance: true,
        EmpSaleRank: true,
        PayMethod: true,
        PayAnalysis: true,
      }, 
      visible: false,
    }
  }

  ModalSetting=()=>{
    this.setState({
      visible: true
    })
  }

  moduleOper=(moduleName,ev)=>{
    const elm=ev.target;
    this.modStaStorage[moduleName]=!this.modStaStorage[moduleName];
    if(elm.innerHTML=='移除'){
      elm.innerHTML='增加';
      elm.style.background='#57ae57';
    }
    else{
      elm.innerHTML='移除'
      elm.style.background='#999';
    }
    console.log(this.modStaStorage)
  }

  confirmOper = (e) => {
    this.setState({
      moduleState:this.modStaStorage,
      visible: false,
    })
    //console.log(this.state.moduleState)
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    // console.log(styles)
    const { 
      moduleState,
      visible,
    }=this.state;
    const moduleList=[];
    const moduleSetList=[];

    for(let attr in moduleState){
      //显示module数量
      moduleSetList.push(
        <li key={attr}>
          <span>{attr}</span>
          {
            attr=='Default'?(
              <button
                className={styles.default} 
                disabled>默认</button>
            ):(
              <button
                className={styles.removeBtn}
                onClick={this.moduleOper.bind(this,attr)}>移除</button>
            )
          }
          
        </li>
      )

      //显示module
      moduleState[attr]?moduleList.push(
        <HomePageModule 
          key={attr} 
          moduleName={attr} 
          ModalSettingFn={this.ModalSetting} />
      ):null;
    }
    // console.log(styles)
      return (
        <Layout className={styles.homePageLay}>
          <Content>
            <Row 
              style={{overflow: 'hidden'}}
              className={styles.ShopContent} 
              gutter={16} >
              {moduleList}
            </Row>

            <Modal
              title="添加/删除内容模块"
              visible={visible}
              onOk={this.confirmOper}
              onCancel={this.handleCancel}
            >
              <div className={styles.moduleSet}>
                {/* <div className={styles.ShopOverview}>
                  店铺概况
                  <span className={styles.default}>默认</span>
                </div> */}
                <ul className={styles.setBox}>
                  {moduleSetList}
                </ul>
              </div>
            </Modal>
          </Content>
          <Sider width="300">
            <SiderInfo/>
          </Sider>
        </Layout>
      )
  }
}

export default HomePage;
