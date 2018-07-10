import React, { Component } from 'react'
import { TabBar,WingBlank,Carousel,Flex,WhiteSpace } from 'antd-mobile';
import Title from '../../component/Title/index'
import './style/index.css'

export default class institutehome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
      data: ['1', '2', '3'],
      imgHeight: 138,
      rankType:['访问量','活跃度','文章','资源','名师课堂','主题研修','话题'],
      rankActiveNum:0,
      rankListOne:[{},{},{},{},{}],
      rankListTwo:[{},{},{},{},{}],
    };
    this.handleRankTypeClick = this.handleRankTypeClick.bind(this);
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  handleRankTypeClick(index){
    this.setState({
      rankActiveNum:index
    })
  }
  render() {
    const {rankActiveNum} = this.state;
    const {handleRankTypeClick} =this;
    const rankList = this.state.rankType.map((val,key)=>{
      if(rankActiveNum===key){
        return <div key={key} onClick={()=>{handleRankTypeClick(key)}} className='rank_type bg_fff rank_active'>{val}</div>
      }else{
        return <div key={key} onClick={()=>{handleRankTypeClick(key)}} className='rank_type bg_fff'>{val}</div>
      }
    });
    
    let rankListReal = ['',''].map((val,key)=>{
      var objName = ''
      if(key===0){
        objName = 'rankListOne'
      }else{
        objName = 'rankListTwo'
      }
      return (
        <ul className='rank_list_box' key={key}>
          <li className='rank_list_head'>
            <div className='rank_num'>名次</div>
            <div className='studio_name'>工作室名称</div>
            <div className='visitor_num'>访问量</div>
          </li>
          {this.state[objName].map((val1,key1)=>{
            var activeClass = '';
            if(key===0&&key1===0){
              activeClass = 'f_red';
            }else if(key===0&&key1===1){
              activeClass = 'f_blue'
            }else if(key===0&&key1===2){
              activeClass = 'f_yellow'
            };
            return (
              <li 
                className={activeClass}
                key={key1}
              >
                <div className='rank_num'>{key*5+key1+1}</div>
                <div className='studio_name'>工作室名称</div>
                <div className='visitor_num'>10</div>
              </li>
            )
          })}
        </ul>
      )
    });
    
    return (
      <div>
        {/* 轮播图 */}
        <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src='https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height:'138px' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 留白 */}
        <WhiteSpace size='md' className='bg_fff'/>
        {/* 双翼留白 */}
        <Title title='工作室排行榜'/>
        <WingBlank size='lg'>
          
          <Flex wrap="wrap" className='rank_type_list'>
            {rankList}
          </Flex>
        </WingBlank>
        <div className='rank_list bg_fff'>
          <Carousel
            autoplay={false}
            infinite={false}
            className='carousel_bottom'
          >
            {rankListReal}
          </Carousel>
        </div>
        {/* 底部状态栏 */}
        <div style={this.state.fullScreen ? { position: 'fixed', height: '50px', width: '100%', bottom: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            noRenderContent='true'
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Life"
              key="Life"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={0}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="Koubei"
              key="Koubei"
              badge={''}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
              data-seed="logId1"
            >
              
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="Friend"
              key="Friend"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="My"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}
