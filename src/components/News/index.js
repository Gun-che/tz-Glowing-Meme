import React from 'react'
import * as s from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons'
import {
  Link,
  useRouteMatch,
} from 'react-router-dom'

export default ({
  handlerRequest,
  deleteRequest,
  userData,
  data,
  token,
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
            <FontAwesomeIcon icon={faEdit} />
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
      test news
      <button onClick={handlerRequest}>update</button>
      {Object.keys(data).length !== 0 &&
        data.map((i) => {

          const date = new Date(i.createDate)
            .toLocaleDateString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })
          return (
            <div key={i.createDate}>
              {tmpEditIcons(i.creator.displayName, i)}
              <Link
                to={`${match.path}/${i._id}`}>
                <div className={s.item}>
                  <h2>{i.title}</h2>
                  <h3>{i.creator.displayName} {date}</h3>
                  <p>{i.content}</p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}