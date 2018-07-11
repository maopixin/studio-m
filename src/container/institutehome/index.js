import React, { Component } from 'react'
import { TabBar,WingBlank,Carousel,Flex,WhiteSpace } from 'antd-mobile';
import Title from '../../component/Title/index';
import Information from '../../component/Information/index';
import BlockItem from '../../component/BlockItem/index';
import VideoPlayItem from '../../component/VideoPlayItem/index'
import './style/index.css';

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
      BlockItemData:[{},{}]
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
    const {rankActiveNum,BlockItemData} = this.state;
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
        <WhiteSpace size='md'/>
        <Title title='工作室资讯' showMore={true} to='/xxx/xxx'/>
        <Information type='notice' time="2018-01-06"/>
        <Information type='information' time="2018-01-06"/>
        <Information type='propaganda' time="2018-01-06"/>
        <WhiteSpace size='md'/>

        <Title title='特色展示' showMore={true} to='/xxx/xxx'/>
        <div className='bg_fff'>
          <WhiteSpace size='md'/>
          <WingBlank size='lg' className='clearfix'>
            {BlockItemData.map((val,key)=>{
              return (<BlockItem key={key} itemData={{}}/>)
            })}
          </WingBlank>
          <WhiteSpace size='md'/>
        </div>
        <WhiteSpace size='md'/>

        <Title title='活动案例' showMore={true} to='/xxx/xxx'/>
        <div className='bg_fff'>
          <WhiteSpace size='md'/>
          <WingBlank size='lg' className='clearfix'>
            {BlockItemData.map((val,key)=>{
              return (<BlockItem key={key} itemData={{}}/>)
            })}
          </WingBlank>
          <WhiteSpace size='md'/>
        </div>
        <WhiteSpace size='md'/>

        <Title title='名师简介'/>
        <div className='bg_fff'>
          <WhiteSpace size='md'/>
            <WingBlank>
              <div className='star_teacher_info'><VideoPlayItem/></div>
              <div className='star_teacher_title'>名师工作室</div>
            </WingBlank>
          <WhiteSpace size='md'/>
        </div>
        <WhiteSpace size='md'/>

        <Title title='每日一课' moreText='往期回顾' showMore={true} to='/s'/>
        <div className='bg_fff'>
          <WhiteSpace size='md'/>
            <WingBlank className='clearfix'>
              <div className='lesson_pic'><VideoPlayItem/></div>
              <div className='lesson_info'>
                <div className='lesson_info_title'>张紧轮名师公张紧轮名师公司做事张紧轮名师公司做事张紧轮名师公司做事张紧轮名师公司做事司做事<span className='clam_line'>...</span></div>
                <div className='lesson_info_person'>授课人：天之大</div>
                <div className='lesson_info_evaluate'>点评：天之大xxxxxxxxxxxxxxxxxxxx</div>
              </div>
            </WingBlank>
          <WhiteSpace size='md'/>
        </div>
        <WhiteSpace size='md'/>

        <Title title='学科带头人风采' showMore={true} to='/s'/>
        <div className='bg_fff'>
            
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
