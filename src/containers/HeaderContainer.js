import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { auth2Init } from '../utils/auth2Init'
import {
  createRequest,
  createExitRequest
} from '../actions/user'

import { Header } from '../components/Header'

export const HeaderContainer = ({
  signIn,
  signOut,
  userData,
  loggedIn,
  msg,
}) => {

  useEffect(() => {
    auth2Init()
  }, [])

  return (
    <div>
      <Header
        signIn={signIn}
        signOut={signOut}
        loggedIn={loggedIn}
        userData={userData}
        msg={msg}
      />
    </div>
  )
}

HeaderContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  userData: state.user.userData,
  msg: state.user.msg
})

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(createRequest()),
  signOut: () => dispatch(createExitRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
