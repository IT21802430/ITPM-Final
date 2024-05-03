import React, { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import Table from "../Component/travelDestination/Table"
import AddTravelDest from "../Component/travelDestination/addTravelDest"
import UpdateTravelDest from "../Component/travelDestination/UpdateTravelDest"
import DeleteTravelDest from "../Component/travelDestination/DeleteTravelDest"

export default function TravelDestTable() {
    const [travelDestId, setTravelDestId] = useState()
    const [updateTravelDestId, setUpdateTravelDestId] = useState()
    console.log(updateTravelDestId)
    const [value, setValue] = useState({
        name: '',
        location: '',
        destinationType: '',
        entranceFee: '',
    })
    const deleteTravelDest = (travelDestId) => {
        setTravelDestId(travelDestId)
    }
    const handleTravelDestDelete = async () => {
        try {
            const deleteTravelDest = await axios.delete(`http://localhost:8000/hotels/delete/${travelDestId}`)
            const response = deleteTravelDest.data
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
            [e.target.travelDestName]: e.target.value
        })

    }


    const updateTravelDestData = (updateId) => {
        setUpdateTravelDestId(updateId)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const UpdateTravelDest = await axios.put(`http://localhost:8000/hotels/update/${updateTravelDestId}`,value)
            const response = UpdateTravelDest.data

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
            <Table DeleteTravelDest={deleteTravelDest} UpdateTravelDest={updateTravelDestData}></Table>

            <AddTravelDest></AddTravelDest>
            <UpdateTravelDest handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></UpdateTravelDest>
            <DeleteTravelDest handleTravelDestDelete={handleTravelDestDelete} ></DeleteTravelDest>
        </>
    )
}