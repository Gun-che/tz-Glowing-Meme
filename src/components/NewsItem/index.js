import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons'
import {
  Link,
  useRouteMatch,
} from 'react-router-dom'

import * as s from './index.module.scss'

const NewsItem = ({
  data,
  token,
  deleteRequest,
  userData,
}) => {

  let name = '';

  if (userData.getName) {
    name = userData.getName()
  }

  const match = useRouteMatch()
  console.log(match)

  const {
    title,
    content,
    createDate,
    creator: {
      displayName
    }
  } = data

  const formatDate = new Date(createDate)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })


  const tmpEditButtons = (edit, remove, className = 'editBtns') => {

    const _onDelete = () => {
      deleteRequest({
        newsId: data._id,
        token: token,
      })
    }

    if (name && name === displayName) {
      return (
        <div className={s[className]}>
          <Link to={`${match.url}/edit`}>
            {edit}
          </Link>
          <Link to={`/news`} onClick={_onDelete}>
            {remove}
          </Link>
        </div>
      )
    }
  }

  return (
    <section className={s.wrap}>
      <div className="news">
        {tmpEditButtons(
          <FontAwesomeIcon icon={faEdit} />,
          <FontAwesomeIcon icon={faTimesCircle} />,
          'icons'
        )}
        <h2>{title}</h2>
        <h3>{name}</h3>
        <h4>{formatDate}</h4>
        <p>{content}</p>

      </div>
      {tmpEditButtons(
        <button>Редактировать</button>,
        <button>Удалить</button>
      )}
    </section>
  )
}

NewsItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsItem