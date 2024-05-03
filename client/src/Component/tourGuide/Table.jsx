import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ DeleteTourGuide, UpdateTourGuide }) {
    const [data, setData] = useState([])
    useEffect(() => {
        async function FeatchData() {
            try {
                const TourGuide = await axios.get('http://localhost:8000/api/get')
                const response = TourGuide.data
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
                                <h2>Registered Tour-Guides List</h2>
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
                                <th>Tour-Guide Name</th>
                                <th>Registration No</th>
                                <th>Phone No</th>
                                <th>Rate Per Day</th>
                                <th>Expertise Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.tourGuides?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.tourguideName}</td>
                                        <td>{elem.tourguideRegNo}</td>
                                        <td>{elem.phoneNo}</td>
                                        <td>{elem.ratePerDay}</td>
                                        <td>{elem.expertiseArea}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateTourGuide(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteTourGuide(elem._id)}>
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
