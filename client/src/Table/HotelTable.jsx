export default function HotelTable() {
    const [hotelId, setHotelId] = useState()
    const [updateHotelId, setUpdateHotelId] = useState()
    console.log(updateHotelId)
    const [value, setValue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    })
    const deleteHotel = (hotelId) => {
        setHotelId(hotelId)
    }
    const handleUserDelet = async () => {
        try {
            const DeletUser = await axios.delete(`http://localhost:8000/api/delete/${userId}`)
            const response = DeletUser.data
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
            [e.target.name]: e.target.value
        })

    }


    const UpadteUserData = (Updatedid) => {

        setUpdatedUserId(Updatedid)

    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const UpdatedUser = await axios.put(`http://localhost:8000/api/update/${updatedUserId}`,value)
            const response = UpdatedUser.data

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
            <Table Deletuser={deletuser} UpdatedUser={UpadteUserData}></Table>

            <AddUser></AddUser>
            <UpdatedUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange}></UpdatedUser>
            <DeletUser handleUserDelet={handleUserDelet} ></DeletUser>




        </>
    )
}