import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { EditForm } from '../EditForm'

const NewsEdit = ({
  data,
  token,
  newsId,
  editState,
  msg,
  editRequest,
}) => {
  const {
    title: initTitle,
    content: initContent,
  } = data

  const [title, setTitle] = useState(initTitle)
  const [content, setContent] = useState(initContent)

  const handlerChange = (e) => {

    const target = e.target

    if (target.tagName === 'INPUT') {
      setTitle(target.value)
      console.log('title change')

    } else {
      setContent(target.value)
      console.log('content change')

    }
  }

  function handlerSubmit(event) {

    event.preventDefault();
    editRequest({
      token,
      title,
      content,
      newsId
    })
  }

  const tmp = () => {

    if (editState === 'done') {
      return <Redirect to='/news' />

    } else {
      return (<EditForm
        editState={editState}
        handlerSubmit={handlerSubmit}
        handlerChange={handlerChange}
        title={title}
        content={content}
        headerTitle='Изменить новость'
        msg={msg}
      />
      )
    }

  }
  return tmp()
}

NewsEdit.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsEdit