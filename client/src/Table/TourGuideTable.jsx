import axios from "axios";
import AddTourGuide from "../Component/tourGuide/AddTourGuide"; 
import UpdateTourGuide from "../Component/tourGuide/UpdateTourGuide"; 
import DeleteTourGuide from "../Component/tourGuide/DeleteTourGuide";
import Table from "../Component/user/Table";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function TourGuideTable() {
    const [tourGuideId, setTourGuideId] = useState()
    const [updateTourGuideId, setUpdateTourGuideId] = useState()
    console.log(updateTourGuideId)
    const [value, setValue] = useState({
        tourguideName: '',
        tourguideRegNo: '',
        phoneNo: '',
        ratePerDay: '', 
        expertiseArea: '',
    })
    const deleteTourGuide = (tourGuideId) => {
        setTourGuideId(tourGuideId)
    }
    const handleTourGuideDelete = async () => {
        try {
            const deleteTourGuide = await axios.delete(`http://localhost:8000/hotels/delete/${tourGuideId}`)
            const response = deleteTourGuide.data
            if (response.success) {
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.tourguideName]: e.target.value
        })

    }


    const updateTourGuideData = (updateId) => {
        setUpdateTourGuideId(updateId)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const UpdateTourGuide = await axios.put(`http://localhost:8000/hotels/update/${updateTourGuideId}`,value)
            const response = UpdateTourGuide.data

            if (response.success) {
                toast.success(response.message)
            }
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
        // console.log(value)
    }
    return (
        <>
            <Table DeleteTourGuide={deleteTourGuide} UpdateTourGuide={updateTourGuideData}></Table>

            <AddTourGuide></AddTourGuide>
            <UpdateTourGuide handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></UpdateTourGuide>
            <DeleteTourGuide handleTourGuideDelete={handleTourGuideDelete} ></DeleteTourGuide>
        </>
    )
}