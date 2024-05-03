import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

export default function AddTourGuide () {
    const [value, setValue] = useState({
        tourguideName: '',
        tourguideRegNo: '',
        phoneNo: '',
        ratePerDay: '', 
        expertiseArea: '', 
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.tourguideName]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const addTourGuide = await axios.post('http://localhost:8000/api/create', value)
            const response = addTourGuide.data
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
                                <h4 className="modal-title">Add Tour-Guide Details</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tour-Guide Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Registration No.</label>
                                    <input type="text" value={value.fathername} name='fathername' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone No</label>
                                    <input type="email" value={value.email} name='email' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Rate Per Day</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Expertise Area</label>
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
