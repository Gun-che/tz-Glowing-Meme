import React from 'react'
import * as s from './index.module.scss'

export default ({
  userData
}) => {

  return (
    <div className={s.card}>
      <div className={s.photo}>
        <img src={userData.getImageUrl()} alt="i" />
      </div>
      <div className={s.info}>
        <h3>
          {userData.getName()}
        </h3>
        <h4>
          {userData.getEmail()}
        </h4>
      </div>
    </div>
  )
}