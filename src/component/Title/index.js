import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import './style/index.css'
export default withRouter(class Title extends Component {

  render() {
    const {title,showMore,to,moreText} = this.props;
    let more;
    if(showMore){
      more=(<Link to={to} className='more'>{moreText||'更多'}</Link>)
    }else{
      more=moreText
    }
    return (
      <div className='common_title'>
        <span className='line'></span>
        <span className='text'>
            {title}
        </span>
        {more}
      </div>
    )
  }
})
