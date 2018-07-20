import React from 'react'
import {Icon} from 'antd-mobile'
export default function asyncComponent (importComponent) {
  class AsyncComponent extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        component: null,
      }
    }

    async componentDidMount () {
      const { default : component } = await importComponent()

      this.setState({
        component: component
      })
    }

    render () {
      const C = this.state.component

      return C
        ? <C {...this.props} />
        : <div style={{padding:'0 20px',textAlign:'right'}}><Icon type="loading" style={{}} size='xxs' /></div>
    }
  }

  return AsyncComponent
}