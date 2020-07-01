import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LoadingThin } from '../LoadingComponent'
import * as s from './index.module.scss'

export const EditForm = ({
  editState,
  handlerSubmit,
  handlerChange,
  title,
  content,
  headerTitle,
  msg,
  validMsg,
  newsId = '',
}) => {

  const handlerClick = (e) => {
    if (!window.confirm('Вы уверены? Несохранённые изменения будут утеряны!')) {
      e.preventDefault()
    }
  }

  return (
    <section className={s.wrap + ' container'}>
      <div className={s.news}>
        <div className={s.message}>
          {editState === 'err' && <h2>Ошибка запроса! ({msg})</h2>}
          {validMsg && <h2>{validMsg}</h2>}
          {editState === 'loading' && <LoadingThin />}
        </div>
        <div className={s.wrapForm}>
          <div className={s.header}>{headerTitle}</div>
          <form action="" onSubmit={handlerSubmit} className={s.body}>
            <label htmlFor="title">Заголовок</label>
            <input
              type="text"
              value={title}
              onChange={handlerChange}
              id="title" />
            <label htmlFor="content">Контент</label>
            <textarea
              id="content"
              onChange={handlerChange}
              value={content}
            ></textarea>
            <div className={s.btns}>
              <button
                type='submit'
                disabled={editState === 'loading'}>Сохранить</button>
              {newsId ?
                <Link
                  to={`/news/${newsId}`}
                  onClick={handlerClick}>
                  <button>Отмена</button>
                </Link> :
                <Link
                  to={`/news`}
                  onClick={handlerClick}>
                  <button>Отмена</button>
                </Link>
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

EditForm.propTypes = {
  editState: PropTypes.string.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
}