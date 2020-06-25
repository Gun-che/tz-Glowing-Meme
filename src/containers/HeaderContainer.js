import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from '../components/Header'
import { auth2Init } from '../utils/auth2Init'
import {
  createRequest,
  createExitRequest
} from '../actions/user'

export const HeaderContainer = ({ signIn, signOut }) => {

  useEffect(() => {
    auth2Init()
  }, [])

  // const signIn = () => {
  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signIn()
  //     .then(googleUser => {

  //       const profile = googleUser.getBasicProfile()
  //       console.log('ID: ' + profile.getId())

  //       const id_token = googleUser.getAuthResponse().id_token;
  //       console.log('ID token: ' + id_token)
  //     })
  // }

  // const signOut = () => {
  //   const auth2 = window.gapi.auth2.getAuthInstance;
  //   auth2.signOut()
  //     .then(() => console.log('user Signed out'))
  // }

  return (
    <div>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign Out</button>
      <Header />
    </div>
  )
}

HeaderContainer.propTypes = {
  signIn: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(createRequest()),
  signOut: () => dispatch(createExitRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
