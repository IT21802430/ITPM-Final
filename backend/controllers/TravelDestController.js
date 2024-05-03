import travelDestModel from "../models/TravelDest"

const Create = async(req,res)=>{
    try {
        const {name, location, destinationType, entranceFee} = req.body
        const NewTravelDest =  new travelDestModel ({
            name, location, destinationType, entranceFee,
        })
        await NewTravelDest.save()

        res.status(200).json({success:true,message:"Destination Detailes Saved Successfully.", NewHotel})
    } catch (error) {
        console.log(error)
        return  res.status(500).json({success:false,message:"Something went wrong."})
    }
}

///////Read api
const Get = async(req,res)=>{
    try {
        const travelDests = await travelDestModel.find()
        if (!travelDests) {
            return  res.status(404).json({success:false})
        }
        res.status(200).json({travelDests})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false})
    }
}

////////update user api
const Update = async(req,res)=>{
    try {
        const travelDestId = req.params.id
        const updateTravelDest = await travelDestModel.findByIdAndUpdate(travelDestId, req.body,{new:true})
        if (!updateTravelDest) {
            return res.status(404).json({ success: false, message: 'Destination Details not found' });
        }
        res.status(200).json({ success: true, message: 'Destination Details updated successfully', updateTravelDest });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

// delet user ap
const Delete = async(req,res)=>{
    try {
        const travelDestId = req.params.id
        const deleteTravelDest = await travelDestModel.findByIdAndDelete(travelDestId)
        if (!deleteTravelDest) {
        return res.status(404).json({ success: false, message: 'Destination Details not found' });
        }
        res.status(200).json({ success: true, message: 'Destination Details Deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

export {Create, Get, Update, Delete};