import React, { useState } from 'react'

export default function UpdateTravelDest ({ handleOnSubmit, value, handleOnchange }) {
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update Destination Details</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                    <label>Destination Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" value={value.fathername} name='fathername' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Destination Type</label>
                                    <input type="email" value={value.email} name='email' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Entrance Fee</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
