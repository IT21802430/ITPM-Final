import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ DeleteHotel, UpdateHotel }) {
    const [data, setData] = useState([])



    useEffect(() => {
        async function FeatchData() {
            try {
                const Hotel = await axios.get('http://localhost:8000/api/get')
                const response = Hotel.data
                // console.log(response.users)
                setData(response)
                // console.log(response.data.users.email, 'email')
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()

    }, [data])


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Registered Hotels List</h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Hotel</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Hotel Name</th>
                                <th>BusinessReg No</th>
                                <th>Address</th>
                                <th>Location</th>
                                <th>Hotel Grade</th>
                                <th>Room Type</th>
                                <th>Average Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.hotels?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.hotelName}</td>
                                        <td>{elem.businessRegNo}</td>
                                        <td>{elem.address}</td>
                                        <td>{elem.location}</td>
                                        <td>{elem.hotelGrade}</td>
                                        <td>{elem.roomType}</td>
                                        <td>{elem.averagePrice}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateHotel(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteHotel(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}
