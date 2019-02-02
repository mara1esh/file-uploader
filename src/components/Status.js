import React from 'react'
import PropTypes from 'prop-types'


const Status = ({ text }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          Статус: {text}
        </div>
      </div>
    </div>
  )
}

Status.propTypes = {
  text: PropTypes.string.isRequired
}

export default Status