import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Spinner from './common/Spinner'
import react from './common/react.jpg'
import check from './common/check.png'

import { upLoad } from '../api'


const UploadForm = ({ onUpdate }) => {

  const [isChoosen, setChose] = useState(false)
  const InputFile = useRef(null)
  const [Loading, setLoad] = useState(null)

  const _onSuccess = data => {
    setLoad(false)
    onUpdate(data.link)
  }

  const _onFailure = () => onUpdate(null)

  const onUpload = async e => {
    e.preventDefault()

    setLoad(true)

    console.log(InputFile.current.files[0])

    await upLoad(InputFile.current.files[0], _onSuccess, _onFailure)

    setChose(false)
  }

  let LoadStatus = Loading === true ? <Spinner /> : null
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onUpload}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <img src={react} alt="logo" className="img-fluid" />
              </div>
            </div>
            <div className="form-group">
              {
                isChoosen ?
                  (<p><img src={check} alt="ok" className="img-fluid" /></p>) :
                  (<p><label htmlFor="input_fil">Выберите нужный файл</label></p>)
              }
              <input
                className="form-controle-file"
                type="file"
                ref={InputFile}
                id="input_file"
                onChange={() => { setChose(true) }}
              />
              <button
                className="btn btn-block btn-primary mt-2"
                type="submit"
              >Загрузить</button>
            </div>
            {
              LoadStatus
            }
          </form>
        </div>
      </div>
    </div>
  )
}

UploadForm.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default UploadForm