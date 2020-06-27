import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

import { LoadingThin } from '../LoadingComponent/LoadingComponent'
import * as s from './index.module.scss'

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
      return (
        <section className={s.wrap}>
          <div className={s.news}>
            <div className={s.message}>
              {editState === 'err' && msg}
              {editState === 'loading' && <LoadingThin />}
            </div>
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
              <button
                type='submit'
                disabled={editState === 'loading'}>Сохранить</button>
              <Link to={`/news/${newsId}`}>
                <button onClick={() => console.log('click')}>Отмена</button>
              </Link>
            </form>
          </div>
        </section>
      )
    }

  }
  return tmp()
}

NewsEdit.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsEdit