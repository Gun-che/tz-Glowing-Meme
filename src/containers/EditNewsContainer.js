import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createGetNewsItemRequest, createDeleteNewsRequest, createEditNewsRequest } from '../actions/news'
import { LoadingFullScreen } from '../components/LoadingComponent/LoadingComponent'
import NewsEdit from '../components/NewsEdit'

export const EditNewsContainer = ({
  handlerRequest,
  data,
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
  data: PropTypes.array.isRequired,
  handlerRequest: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  editState: PropTypes.string.isRequired,
  editRequest: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  data: state.news.newsData,
  msg: state.news.msg,
  isFetching: state.news.isFetching,
  token: state.user.token,
  userData: state.user.userData,
  editState: state.news.editState,
  currentData: state.news.currentData
})

const mapDispatchToProps = dispatch => ({
  handlerRequest: (newsId) => dispatch(createGetNewsItemRequest(newsId)),
  deleteRequest: (options) => dispatch(createDeleteNewsRequest(options)),
  editRequest: (options) => dispatch(createEditNewsRequest(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer)

