import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { EditForm } from '../EditForm'


const NewsEdit = ({
  token,
  editState,
  msg,
  createRequest,
}) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

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
    createRequest({
      token,
      title,
      content,
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
        headerTitle='Создать новость'
        msg={msg}
      />
      )
    }

  }
  return tmp()
}

export default NewsEdit