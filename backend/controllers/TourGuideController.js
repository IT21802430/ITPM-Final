import tourguideModel from "../models/TourGuide"

const Create = async(req,res)=>{
    try {
        const {tourguideName, tourguideRegNo, phoneNo, ratePerDay, expertiseArea}=req.body
        const NewTourguide=  new tourguideModel ({
            tourguideName, tourguideRegNo, phoneNo, ratePerDay, expertiseArea,
        })
        await NewTourguide.save()

        res.status(200).json({success:true,message:"Tour-Guide Detailes Saved Successfully.", NewHotel})
    } catch (error) {
        console.log(error)
        return  res.status(500).json({success:false,message:"Something went wrong."})
    }
}

///////Read api
const Get = async(req,res)=>{
    try {
        const tourGuides = await tourguideModel.find()
        if (!tourGuides) {
            return  res.status(404).json({success:false})
        }
        res.status(200).json({tourGuides})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false})
    }
}

////////update user api
const Update = async(req,res)=>{
    try {
        const tourGuideId = req.params.id
        const updateTourGuide = await tourguideModel.findByIdAndUpdate(tourGuideId, req.body,{new:true})
        if (!updateTourGuide) {
            return res.status(404).json({ success: false, message: 'Tour-guide Details not found' });
        }
        res.status(200).json({ success: true, message: 'Tour-guide Details updated successfully', updateTourGuide });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

// delet user ap
const Delete = async(req,res)=>{
    try {
        const tourGuideId = req.params.id
        const deleteTourGuide= await tourguideModel.findByIdAndDelete(tourGuideId)
        if (!deleteTourGuide) {
        return res.status(404).json({ success: false, message: 'Tour-guide Details not found' });
        }
        res.status(200).json({ success: true, message: 'Tour-guide Details Deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
}

export {Create, Get, Update, Delete};



