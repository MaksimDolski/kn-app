import { useState } from "react"
import NewModal from "./NewModal"

const AddTableRow = (props) => {

    const { data, setData, handleCloseAddTableRowClick } = props

    const [addFormData, setAddFormData] = useState({
        id: "",
        orderNo: "",
        date: "",
        customer: "",
        trackingNo: "",
        consignee: "",
        status: "", 
    })

    // input onChange
    const handleAddFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }

    // save button
    const handleSaveAddTableRowClick= () => {

        const newData = {
            id: addFormData.id,
            orderNo: addFormData.orderNo,
            date: addFormData.date,
            customer: addFormData.customer,
            trackingNo: addFormData.trackingNo,
            consignee: addFormData.consignee,
            status: addFormData.status,
        }

        const newAllTheData = [newData, ...data]

        // browser mode, without JSON POST method
        if (addFormData.orderNo != "") {
            setData(newAllTheData)
            handleCloseAddTableRowClick()
        } else {
            alert("Enter the order number.")
        }

    }


    return (
        <>
            { data && <NewModal 
            handleCloseAddTableRowClick={ handleCloseAddTableRowClick } 
            handleSaveAddTableRowClick= { handleSaveAddTableRowClick}
            handleAddFormChange={ handleAddFormChange }
            />}
        </>
    )

}
 
export default AddTableRow