import React from 'react'
import PropTypes from 'prop-types'
import * as s from './index.module.scss'

export default function ErrorPage() {
  return (
    <>
      <div className={s.wrap + ' container'}>
        404
        <h3>not found</h3>
      </div>
    </>
  )
}

ErrorPage.propTypes = {
  err: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
}
