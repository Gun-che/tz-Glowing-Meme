import React from 'react'
import {
  Link,
  useRouteMatch,
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

import * as s from './index.module.scss'


export default ({
  handlerRequest,
  deleteRequest,
  userData,
  data,
  token,
  loggedIn
}) => {

  const match = useRouteMatch()
  let name = '';

  if (userData.getName) {
    name = userData.getName()
  }

  const tmpEditIcons = (creatorName, i) => {

    const _onDelete = () => {
      deleteRequest({
        newsId: i._id,
        token: token,
      })
    }

    if (name && name === creatorName) {
      return (
        <div className={s.icons}>
          <Link to={`${match.path}/${i._id}/edit`}>
            <button>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </Link>
          <button onClick={_onDelete}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      )
    }
  }

  return (
    <div className={s.grid}>
      <div className={s.buttons}>
        <button onClick={handlerRequest}>Обновить</button>
        {loggedIn && <Link to='/news/create'>
          <button>Создать Новость</button>
        </Link>}
      </div>
      {!data.length && <h2>Записей не найдено!</h2>}
      {data.length &&
        data.map((i) => {

          const _onCutContent = (string) => {

            if (string.split(' ').length > 50) {
              return string
                .split(' ', 50)
                .join(' ')
                + ' ...'
            }

            return string
          }

          const date = new Date(i.createDate)
            .toLocaleDateString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })

          return (
            <div key={i.createDate} className={s.wrapItem}>
              <div className={s.header}>
                {tmpEditIcons(i.creator.displayName, i)}
              </div>
              <div className={s.body}>
                <Link
                  to={`${match.path}/${i._id}`}>
                  <div>
                    <h2>{i.title}</h2>
                    <h3>{i.creator.displayName} {date}</h3>
                    <p>{_onCutContent(i.content)}</p>
                  </div>
                  <p className={s.href}>Читать полностью</p>
                </Link>
              </div>
            </div>
          )
        })
          .reverse()
      }
    </div>
  )
}