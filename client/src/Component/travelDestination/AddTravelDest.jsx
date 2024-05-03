import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

export default function AddTravelDest () {
    const [value, setValue] = useState({
        name: '',
        location: '',
        destinationType: '',
        entranceFee: '', 
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.hotelName]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const addTravelDest = await axios.post('http://localhost:8000/api/create', value)
            const response = addTravelDest.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Destination Details</h4>
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
