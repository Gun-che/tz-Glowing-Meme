import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const NewsContainer = () => {
  return (
    <div>
      test news
    </div>
  )
}

NewsContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
