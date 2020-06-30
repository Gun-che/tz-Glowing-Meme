import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewsRequest, createDeleteNewsRequest } from '../actions/news'
import jwt from 'jsonwebtoken'

import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'
import ErrorPage from '../components/ErrorPage'
import { News } from '../components/News'


export const NewsContainer = ({
  handlerRequest,
  data,
  isFetching,
  msg,
  deleteRequest,
  token,
  loggedIn
}) => {

  const [id, setId] = useState('')

  useEffect(() => {
    handlerRequest()
  }, [handlerRequest])

  useEffect(() => {
    token && setId(jwt.decode(token).id)
  }, [token])

  const tmp = () => {

    if (isFetching) {
      return <LoadingFullScreen />

    } else if (msg) {
      return <ErrorPage err={msg} />

    } else {
      return <News
        data={data}
        handlerRequest={handlerRequest}
        deleteRequest={deleteRequest}
        token={token}
        loggedIn={loggedIn}
        id={id}
      />
    }
  }

  return tmp();
}

NewsContainer.propTypes = {
  handlerRequest: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  data: state.news.newsData,
  isFetching: state.news.isFetching,
  msg: state.news.msg,
  token: state.user.token,
  loggedIn: state.user.loggedIn
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: () => dispatch(createNewsRequest()),
  deleteRequest: (newsId) => dispatch(createDeleteNewsRequest(newsId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
