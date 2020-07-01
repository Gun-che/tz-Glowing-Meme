import React from 'react'
import * as s from './index.module.scss'

export const LoadingConst = <div className={s.fullWrap + ' container'}>
  <div className={s.loader} id="loading">loading</div>
</div>

export function LoadingFullScreen() {
  return (<div className={s.fullWrap + ' container'}>
    <div className={s.loader} id="loading">loading</div>
  </div>)
}

export function LoadingThin() {
  return (<div className={s.wrap + ' container'}>
    <div className={s.loader} id="loading">loading</div>
  </div>)
}