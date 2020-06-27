import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as s from './index.module.scss'

const NewsEdit = ({
  data,
  token,
  userData,
  newsId,
  editState,
  msg,
  editRequest,
}) => {
  const {
    title: initTitle,
    content: initContent,
  } = data

  console.log(newsId)
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

  return (
    <section className={s.wrap}>
      <div className={s.news}>
        <form action="" onSubmit={handlerSubmit}>
          <input
            type="text"
            value={title}
            onChange={handlerChange}
            required />
          <textarea
            name="content"
            onChange={handlerChange}
            value={content}
            required
          ></textarea>
          <button type='submit'>Сохранить</button>
          <button onClick={() => console.log('click')}>Отмена</button>
        </form>
      </div>
    </section>
  )
}

NewsEdit.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsEdit