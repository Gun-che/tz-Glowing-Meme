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
import dateFormater from '../../utils/dateFormater'
import { cutContent } from '../../utils/cutContent'


export const News = ({
  handlerRequest,
  deleteRequest,
  data,
  token,
  loggedIn,
  id,
}) => {

  const match = useRouteMatch()

  const tmpEditIcons = (creatorId, i) => {

    const handlerDelete = () => {
      if (window.confirm('Уверены, что желаете удалить новость?')) {
        deleteRequest({
          newsId: i._id,
          token: token,
        })
      }
    }

    if (id === creatorId) {
      return (
        <div className={s.icons}>
          <Link to={`${match.path}/${i._id}/edit`}>
            <button tabIndex='-1' title="Редактировать">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </Link>
          <button onClick={handlerDelete}>
            <FontAwesomeIcon icon={faTimesCircle} title="Удалить" />
          </button>
        </div>
      )
    }
  }

  return (
    <div className={s.grid + ' page'}>
      <div className={s.buttons}>
        <button onClick={handlerRequest}>Обновить</button>
        {loggedIn && <Link to='/news/create'>
          <button>Создать Новость</button>
        </Link>}
      </div>
      {!data.length && <h2>Записей не найдено!</h2>}
      {data.length &&
        data.map((i) => {

          const date = dateFormater(i.createDate)

          return (
            <div key={i.createDate} className={s.wrapItem}>
              <div className={s.header}>
                {tmpEditIcons(i.creator._id, i)}
              </div>
              <div className={s.body}>
                <Link
                  to={`${match.path}/${i._id}`}>
                  <div>
                    <h2>{i.title}</h2>
                    <h3>{i.creator.displayName} {date}</h3>
                    <p>{cutContent(i.content, 50)}</p>
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
