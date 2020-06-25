import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { request } from '../actions/index'
import { App } from '../components/App'

export const AppContainer = ({ test, name }) => {

  return (
    <>
      <App />
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
  test: PropTypes.number,
  act: PropTypes.func
}

const mapStateToProps = store => ({
  name: store.name,
  test: store.test
})

const mapDispatchToProps = dispatch => ({
  act: () => dispatch(request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)