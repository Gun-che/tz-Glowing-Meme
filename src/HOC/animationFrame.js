import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.scss'

export const Transition = Component => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        isVisible: false,
      }
    }

    componentDidMount() {
      this.setState({
        isVisible: true,
      })
    }

    componentWillUnmount() {
      this.setState({
        isVisible: false,
      })
    }

    render() {
      return (<CSSTransition
        in={this.state.isVisible}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <div className='page'>
          <Component {...this.props} />
        </div>
      </CSSTransition>)
    }
  }
}