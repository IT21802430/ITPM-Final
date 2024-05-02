import axios from "axios";
import AddHotel from "../Component/hotel/AddHotel"; 
import UpdateHotel from "../Component/hotel/UpdateHotel"; 
import DeleteHotel from "../Component/hotel/DeleteHotel";
import React, { useState } from "react";
import Table from "../Component/user/Table";
import toast from "react-hot-toast";

export default function HotelTable() {
    const [hotelId, setHotelId] = useState()
    const [updateHotelId, setUpdateHotelId] = useState()
    console.log(updateHotelId)
    const [value, setValue] = useState({
        hotelName: '',
        businessRegNo: '',
        address: '',
        location: '', 
        hotelGrade: '', 
        roomType: '', 
        averagePrice: '',
    })
    const deleteHotel = (hotelId) => {
        setHotelId(hotelId)
    }
    const handleHotelDelete = async () => {
        try {
            const deleteHotel = await axios.delete(`http://localhost:8000/hotels/delete/${hotelId}`)
            const response = deleteHotel.data
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
            [e.target.hotelName]: e.target.value
        })

    }


    const updateHotelData = (updateId) => {

        setUpdateHotelId(updateId)

    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const UpdateHotel = await axios.put(`http://localhost:8000/hotels/update/${updateHotelId}`,value)
            const response = UpdateHotel.data

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
            <Table DeleteHotel={deleteHotel} UpdateHotel={updateHotelData}></Table>

            <AddHotel></AddHotel>
            <UpdateHotel handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></UpdateHotel>
            <DeleteHotel handleUserDelet={handleHotelDelete} ></DeleteHotel>
        </>
    )
}