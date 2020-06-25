import React from 'react'
import * as s from './NotFound.module.scss'
import img from './404.jpg'


export default () => (
  <div className={s.wrap}>
    <img src={img} alt="404 not found" />
  </div>
)