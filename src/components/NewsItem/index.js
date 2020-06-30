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
import dateFormater from '../../utils/dateFormater'

const NewsItem = ({
  data,
  token,
  deleteRequest,
  editable,
}) => {

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

  const formatDate = dateFormater(createDate)


  const tmpEditButtons = (edit, remove) => {

    const _onDelete = (e) => {
      if (window.confirm('Уверены, что желаете удалить новость?')) {
        deleteRequest({
          newsId: data._id,
          token: token,
        })
      } else {
        e.preventDefault()
      }
    }

    if (editable) {
      return (
        <>
          <Link to={`${match.url}/edit`}>
            <button
              tabIndex='-1'
              title="Редактировать"
            >{edit}</button>
          </Link>
          <Link to={`/news`} onClick={_onDelete}>
            <button
              tabIndex='-1'
              title="Удалить"
            >{remove}</button>
          </Link>
        </>
      )
    }
  }

  return (
    <section className={s.wrap}>
      <div className={s.news}>
        <div className={s.header}>
          <div className={s.icons}>
            {tmpEditButtons(
              <FontAwesomeIcon icon={faEdit} />,
              <FontAwesomeIcon icon={faTimesCircle} />
            )}
          </div>
        </div>
        <div className={s.body}>
          <h2>{title}</h2>
          <h3>{displayName}</h3>
          <h4>{formatDate}</h4>
          <p>{content}</p>
          <div className={s.editBtns}>
            {tmpEditButtons(
              'Редактировать',
              'Удалить'
            )}
            <Link to='/news'>
              <button title="Назад">Назад</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

NewsItem.propTypes = {
  data: PropTypes.object.isRequired,
  editable: PropTypes.bool.isRequired,
}

export default NewsItem