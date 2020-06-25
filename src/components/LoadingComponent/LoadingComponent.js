import React from 'react'
import * as s from './LoadingComponent.module.scss'
import img from './loading.gif'

export const LoadingConst = <div className={s.fullWrap}>
  <img className={s.loading} src={img} alt="loading" />
</div>

export function LoadingFullScreen() {
  return (<div className={s.fullWrap}>
    <img className={s.loading} id="loading" src={img} alt="loading" />
  </div>)
}

export function LoadingThin() {
  return (<div className={s.wrap}>
    <img className={s.loading} src={img} alt="loading" />
  </div>)
}