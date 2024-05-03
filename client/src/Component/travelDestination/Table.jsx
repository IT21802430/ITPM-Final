import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ DeleteTravelDest, UpdateTravelDest }) {
    const [data, setData] = useState([])
    useEffect(() => {
        async function FeatchData() {
            try {
                const TravelDest = await axios.get('http://localhost:8000/api/get')
                const response = TravelDest.data
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
                                <h2>Travel Destinations List</h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Tour-Guide</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Destination Name</th>
                                <th>Location</th>
                                <th>Destination Type</th>
                                <th>Entrance Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.travelDests?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.location}</td>
                                        <td>{elem.destinationType}</td>
                                        <td>{elem.entranceFee}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateTravelDest(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteTravelDest(elem._id)}>
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
