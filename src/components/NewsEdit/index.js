import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as s from './index.module.scss'

const NewsEdit = ({
  data,
  token,
  userData,
  newsId
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

  return (
    <section className={s.wrap}>
      <div className={s.news}>
        <input
          type="text"
          value={title}
          onChange={handlerChange} />
        <textarea
          name="content"
          onChange={handlerChange}
          value={content}
        ></textarea>
      </div>
      <button onClick={() => console.log('click')}>Сохранить</button>
      <button onClick={() => console.log('click')}>Отмена</button>
    </section>
  )
}

NewsEdit.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsEdit