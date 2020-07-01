import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import jwt from 'jsonwebtoken'

import { createGetNewsItemRequest, createDeleteNewsRequest } from '../actions/news'
import ErrorPage from '../components/ErrorPage'
import { LoadingFullScreen } from '../components/LoadingComponent'
import NewsItem from '../components/NewsItem'


export const NewsItemContainer = ({
  handlerRequest,
  currentData,
  msg,
  isFetching,
  token,
  deleteRequest,
}) => {

  let { newsId } = useParams();

  const [editable, setEditable] = useState(false)

  useEffect(() => {
    handlerRequest(newsId)
  }, [handlerRequest, newsId])

  useEffect(() => {
    const id = token && jwt.decode(token).id;
    const creatorId = currentData[0] && currentData[0].creator._id
    console.log(currentData)

    if (id === creatorId) {
      setEditable(true)

    } else {
      editable && setEditable(false)
    }
  }, [currentData, editable, token])

  const tmp = () => {
    if (currentData.length === 1) {
      return <NewsItem
        data={currentData[0]}
        token={token}
        deleteRequest={deleteRequest}
        editable={editable}
      />

    } else if (msg) {
      return <ErrorPage err={msg} />

    } else if (isFetching) {
      return <LoadingFullScreen />
    }
  }

  return (
    <div>
      {tmp()}
    </div>
  )
}

NewsItemContainer.propTypes = {
  handlerRequest: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  currentData: state.news.currentData,
  msg: state.news.msg,
  isFetching: state.news.isFetching,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: (newsId) => dispatch(createGetNewsItemRequest(newsId)),
  deleteRequest: (newsId) => dispatch(createDeleteNewsRequest(newsId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemContainer)
