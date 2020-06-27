import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { createGetNewsItemRequest, createDeleteNewsRequest, createEditNewsRequest } from '../actions/news'

import NewsEdit from '../components/NewsEdit'
import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'

export const EditNewsContainer = ({
  handlerRequest,
  currentData,
  msg,
  isFetching,
  token,
  userData,
  editState,
  editRequest
}) => {

  let { newsId } = useParams();

  useEffect(() => {
    handlerRequest(newsId)
  }, [handlerRequest, newsId])

  const tmp = () => {
    if (currentData.length === 1) {
      return <NewsEdit
        data={currentData[0]}
        token={token}
        userData={userData}
        newsId={newsId}
        msg={msg}
        editState={editState}
        editRequest={editRequest}
      />
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

EditNewsContainer.propTypes = {
  handlerRequest: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  editState: PropTypes.string.isRequired,
  editRequest: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  msg: state.news.msg,
  isFetching: state.news.isFetching,
  token: state.user.token,
  userData: state.user.userData,
  editState: state.news.editState,
  currentData: state.news.currentData
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: (newsId) => dispatch(createGetNewsItemRequest(newsId)),
  editRequest: (options) => dispatch(createEditNewsRequest(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer)

