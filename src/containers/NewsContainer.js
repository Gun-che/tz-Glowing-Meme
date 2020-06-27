import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewsRequest, createDeleteNewsRequest } from '../actions/news'

import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'
import ErrorPage from '../components/ErrorPage'
import News from '../components/News'

export const NewsContainer = ({
  handlerRequest,
  data,
  isFetching,
  msg,
  userData,
  deleteRequest,
  token,
  loggedIn
}) => {

  useEffect(() => {
    handlerRequest()
  }, [handlerRequest])

  const tmp = () => {

    if (isFetching) {
      return <LoadingFullScreen />

    } else if (msg) {
      return <ErrorPage err={msg} />

    } else {
      return <News
        data={data}
        handlerRequest={handlerRequest}
        userData={userData}
        deleteRequest={deleteRequest}
        token={token}
        loggedIn={loggedIn}
      />
    }
  }

  return tmp();
}

NewsContainer.propTypes = {
  handlerRequest: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  userData: state.user.userData,
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
