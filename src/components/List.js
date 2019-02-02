import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {
              data.map((item,index) => (
                <li key={item} className="list-group-item">
                  <a href={item}
                    className="list-group-item-action"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{index + 1}. {item}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
}

export default List