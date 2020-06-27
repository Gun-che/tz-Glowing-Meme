import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as s from './index.module.scss'
import { LoadingThin } from '../LoadingComponent/LoadingComponent'

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
              <Link to={`/news`}>
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

export default NewsEdit