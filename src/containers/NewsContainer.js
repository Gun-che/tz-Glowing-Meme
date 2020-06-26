import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewsRequest, createDeleteNewsRequest } from '../actions/news'
import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'
import ErrorPage from '../components/ErrorPage'
import News from '../components/News'

export const NewsContainer = ({
  handlerRequest,
  loggedIn,
  data,
  isFetching,
  msg,
  userData,
  deleteRequest,
  token,
}) => {

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      handlerRequest()
    }
  }, [data, handlerRequest])

  const tmp = () => {

    if (isFetching) {
      return <LoadingFullScreen />

    } else if (msg) {
      return <ErrorPage />

    } else if (!loggedIn) {
      return <h2>please, sign in</h2>

    } else {
      console.log(data)
      return <News
        data={data}
        handlerRequest={handlerRequest}
        userData={userData}
        deleteRequest={deleteRequest}
        token={token}
      />
    }
  }

  return tmp();
}

NewsContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handlerRequest: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  userData: state.user.userData,
  data: state.news.newsData,
  isFetching: state.news.isFetching,
  msg: state.news.msg,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: () => dispatch(createNewsRequest()),
  deleteRequest: (newsId) => dispatch(createDeleteNewsRequest(newsId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
