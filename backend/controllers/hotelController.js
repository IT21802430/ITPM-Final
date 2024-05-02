import hotelModel from "../models/Hotel"

const Create = async(req,res)=>{
    try {
        const {hotelName, businessRegNo, address, location, hotelGrade, roomType, averagePrice}=req.body
        const NewHotel=  new hotelModel({
            hotelName, businessRegNo, address, location, hotelGrade, roomType, averagePrice
        })
        await NewHotel.save()

        res.status(200).json({success:true,message:"Hotel Detailes Saved Successfully.", NewHotel})
    } catch (error) {
        console.log(error)
        return  res.status(500).json({success:false,message:"Something went wrong."})
    }
}

///////Read api
const Get = async(req,res)=>{
    try {
        const hotels = await hotelModel.find()
        if (!hotels) {
            return  res.status(404).json({success:false})
        }
        res.status(200).json({hotels})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false})
    }
}

////////update user api
const Update = async(req,res)=>{
    try {
        const hotelId=req.params.id
        const updateHotel = await hotelModel.findByIdAndUpdate(hotelId,req.body,{new:true})
        if (!updateHotel) {
            return res.status(404).json({ success: false, message: 'Hotel Details not found' });
        }
        res.status(200).json({ success: true, message: 'Hotel Details updated successfully', updateHotel });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

// delet user ap
const Delete = async(req,res)=>{
    try {
        const hotelId = req.params.id
        const deleteHotel= await hotelModel.findByIdAndDelete(hotelId)
        if (!deleteHotel) {
        return res.status(404).json({ success: false, message: 'Hotel Details not found' });
        }
        res.status(200).json({ success: true, message: 'Hotel Details Deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

export {Create, Get, Update, Delete};



