import mongoose from "mongoose";

const hotelSchema= new mongoose.Schema({
    hotelName: {
        type: String, 
        required: true,
    }, 
    businessRegNo: {
        type: String, 
        required: true,
    }, 
    address: {
        type: String, 
        required: true,
    }, 
    location: {
        type: String, 
        required: true,
    }, 
    hotelGrade: {
        type: String, 
        required: true,
    }, 
    roomType: {
        type: String, 
        required: true,
    }, 
    averagePrice: {
        type: String, 
        required: true,
    },
},{timestamps:true})


const hotelModel= mongoose.model('hotel',hotelSchema)

export default hotelModel;