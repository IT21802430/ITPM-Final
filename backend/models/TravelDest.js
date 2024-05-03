import mongoose from "mongoose";

const travelDestSchema= new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    }, 
    location: {
        type: String, 
        required: true,
    }, 
    destinationType: {
        type: String, 
        required: true,
    }, 
    entranceFee: {
        type: String, 
        required: true,
    },
},{timestamps:true})


const travelDestModel= mongoose.model('travelDest',hotelSchema)

export default travelDestModel;