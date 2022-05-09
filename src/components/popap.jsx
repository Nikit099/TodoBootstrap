import React from 'react'

function Popap({history}) {
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Обновлено</h5>
              
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClick}  data-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default Popap
