import React from 'react';
import { connect } from 'react-redux'

import { App } from '../components/App'

export const AppContainer = () => {

  return (
    <>
      <App />
    </>
  );
}

const mapStateToProps = store => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)