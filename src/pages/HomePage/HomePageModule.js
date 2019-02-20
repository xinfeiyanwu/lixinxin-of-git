import React, { Component } from 'react';
import { connect } from 'dva';
import { 
  Layout,
  Row,
  Col,
  Icon,
 } from 'antd';
 
import CN from '@/locales/zh-CN/HomePage'
import {addClass,removeClass,toggleClass,siblings} from '@/utils/domTool'
import styles from './HomePage.less';
import Default from './module/Default';
import StorePerformance from './module/StorePerformance';
import SaleAnalysis from './module/SaleAnalysis';
import MemShopComp from './module/MemShopComp';
import MemShopRank from './module/MemShopRank';
import HotShopRank from './module/HotShopRank';
import EmpSaleRank from './module/EmpSaleRank';
import PayMethod from './module/payMethod';
import PayAnalysis from './module/PayAnalysis';

class HomePageModule extends Component {

    state={
        defaultActive: '',
        otherActive: '',
        date: 'week'
    }

    componentDidMount() {
        this.active();
    }

    updateDate=(date,event)=>{
        const {moduleName}=this.props;
        const elm=event.target;
        const sibling=siblings(elm);
        // console.log(sibling)
        sibling.forEach((obj)=>{
            removeClass(obj,styles.active);
        })
        addClass(elm,styles.active);
        //getWrappedInstance()获取组件
        console.log(date)
        this.setState({date}, ()=>{
            // console.log(this.refs[moduleName])
            this.refs[moduleName].getWrappedInstance().switchDate(date);
        });
    }

    getModule=()=>{
        const {moduleName}=this.props;
        let component=null;
        switch(moduleName){
            case 'Default':
                component = <Default ref='Default' />;
                break;
            case 'SaleAnalysis':
                component = <SaleAnalysis ref='SaleAnalysis' date={this.state.date}/>;
                break;
            case 'MemShopComp':
                component = <MemShopComp ref='MemShopComp' date={this.state.date} />;
                break;
            case 'MemShopRank':
                component = <MemShopRank ref='MemShopRank' date={this.state.date} />;
                break;
            case 'HotShopRank':
                component = <HotShopRank ref='HotShopRank' date={this.state.date} />;
                break;
            case 'StorePerformance':
                component = <StorePerformance ref='StorePerformance' date={this.state.date} />;
                break;
            case 'EmpSaleRank':
                component = <EmpSaleRank ref='EmpSaleRank' date={this.state.date} />;
                break;
            case 'PayMethod':
                component = <PayMethod ref='PayMethod' date={this.state.date} />;
                break;
            case 'PayAnalysis':
                component = <PayAnalysis ref='PayAnalysis' date={this.state.date} />;
                break;
            default: 
                component='你输入的组件字段不正确!';
                break;
        }
        return component;
    }

    active=()=>{
        const {moduleName}=this.props;
        
        if(moduleName=='Default'){
            return this.setState({
                defaultActive: styles.active,
            })
        }
        else{
            return this.setState({
                otherActive: styles.active
            })
        }
    }

    getHead=(moduleName)=>{
        const {defaultActive,otherActive}=this.state;
        return moduleName=='MemShopComp'?null:(
            <div>
                <Col 
                    className={`${styles.spanTime} ${styles.spanTimeL} ${defaultActive}`} 
                    span={4} 
                    onClick={this.updateDate.bind(this,'today')}>
                    今天
                </Col>
                <Col  
                    className={`${styles.spanTime} ${otherActive}`} 
                    span={4} 
                    onClick={this.updateDate.bind(this,'week')}>
                    本周
                </Col>
                <Col  
                    className={`${styles.spanTime} ${styles.spanTimeR}`} 
                    span={4} 
                    onClick={this.updateDate.bind(this,'month')}>
                    本月
                </Col>
            </div>
        )
    }

    render() {
        const {
            ModalSettingFn,
            moduleName,
        }=this.props;
        const {date}=this.state;
        
        const colSpan=moduleName=='Default'?24:12;
        const defaulSetIcom=<Col  
                    span={2} 
                    className={styles.contSetting} >
                    <Icon
                        type="setting"
                        theme="twoTone" 
                        onClick={ModalSettingFn}
                        twoToneColor="#52c41a"/>
                </Col>;
        
        return (
            <Col
                style={{marginTop:'5px'}} 
                span={colSpan}>
                <Row>
                    <div className={styles.header}>
                        <Col span={10}>
                            <Icon 
                                type="bar-chart" 
                                style={{marginRight: '5px'}}/>
                            { 
                                `${CN['HomePage.'+moduleName]}(${CN['HomePage.'+date]})`
                            }
                        </Col>
                        {
                            this.getHead(moduleName)
                        }
                        {
                            moduleName=='Default'?defaulSetIcom:null
                        }
                    </div>
                </Row>   
                <Row style={{background: `${moduleName=='Default'?'none':'#fff'}`}}>
                    {
                        this.getModule()
                    }
                </Row>   
            </Col>
        )
    }
}

export default HomePageModule;
