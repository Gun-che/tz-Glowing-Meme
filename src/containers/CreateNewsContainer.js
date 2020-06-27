import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createCreateNewsRequest } from '../actions/news'

import CreateNews from '../components/CreateNews'

export const CreateNewsContainer = ({
  msg,
  token,
  editState,
  createRequest
}) => {

  return <CreateNews
    token={token}
    msg={msg}
    editState={editState}
    createRequest={createRequest}
  />

}

CreateNewsContainer.propTypes = {
  msg: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  editState: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  msg: state.news.msg,
  token: state.user.token,
  editState: state.news.editState,
})

const mapDispatchToProps = dispatch => ({
  createRequest: (options) => dispatch(createCreateNewsRequest(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewsContainer)

