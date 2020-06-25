import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorPage({ err }) {
  return (
    <>
      <h2>Error!</h2>
      {err && <h3>{err}</h3>}
    </>
  )
}

ErrorPage.propTypes = {
  err: PropTypes.string.isRequired
}

