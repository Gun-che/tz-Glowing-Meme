import React from 'react'
import img from './404.jpg'

import * as s from './NotFound.module.scss'

export default () => (
  <div className={s.wrap}>
    <img src={img} alt="404 not found" />
  </div>
)