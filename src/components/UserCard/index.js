import { tokenDecoder } from '../../utils/tokenDecoder'
import React from 'react'
import * as s from './index.module.scss'


export default ({
  authToken
}) => {
  const { name, email, picture } = tokenDecoder(authToken)

  return (
    <div className={s.card}>
      <div className={s.photo}>
        <img src={picture} alt="i" />
      </div>
      <div className={s.info}>
        <h3>
          {name}
        </h3>
        <h4>
          {email}
        </h4>
      </div>
    </div>
  )
}