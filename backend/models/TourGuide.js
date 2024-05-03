import mongoose from "mongoose";

const tourguideSchema= new mongoose.Schema({
    tourguideName: {
        type: String, 
        required: true,
    }, 
    tourguideRegNo: {
        type: String, 
        required: true,
    }, 
    phoneNo: {
        type: String, 
        required: true,
    }, 
    ratePerDay: {
        type: String, 
        required: true,
    }, 
    expertiseArea: {
        type: String, 
        required: true,
    },
},{timestamps:true})


const tourguideModel= mongoose.model('tourguide',hotelSchema)

export default tourguideModel;