import { useState } from "react"
import Table from "./Table"
import Modal from "./Modal"
import AddTableRow from "./AddTableRow"

const Home = () => {


    const [data, setData] = useState(
    [{
      "orderNo": "zz-703744-70550262-2158783",
      "date": "1/31/2019",
      "customer": "Quality Care Properties, Inc.",
      "trackingNo": "TP-939959-05896401-9527134",
      "status": "'Delivered'",
      "consignee": "Twenty-First Century Fox, Inc."
    },
    {
      "orderNo": "zf-756099-36685260-2284356",
      "date": "7/5/2019",
      "customer": "M III Acquisition Corp.",
      "trackingNo": "TP-212584-14866014-2742331",
      "status": "'Delivered'",
      "consignee": "Sun Hydraulics Corporation"
    },
    {
      "orderNo": "hc-438692-69643357-6155954",
      "date": "1/20/2019",
      "customer": "Prudential Public Limited Company",
      "trackingNo": "TP-133466-06521951-2914957",
      "status": "'Delivered'",
      "consignee": "Sequans Communications S.A."
    },
    {
      "orderNo": "ag-718679-04793155-5499127",
      "date": "7/1/2019",
      "customer": "Equity Commonwealth",
      "trackingNo": "TP-822643-23095834-2792629",
      "status": "'Delivered'",
      "consignee": "Nexeo Solutions, Inc."
   
    },
    {
      "orderNo": "mt-086240-44068502-6326725",
      "date": "9/21/2019",
      "customer": "Valero Energy Corporation",
      "trackingNo": "TP-095198-13206210-6543114",
      "status": "'In Transit'",
      "consignee": "John Hancock Income Securities Trust"
    },
    {
      "orderNo": "cz-690051-58260660-6635889",
      "date": "7/30/2019",
      "customer": "The Gabelli Healthcare & Wellness Trust",
      "trackingNo": "TP-388693-80610557-6060489",
      "status": "'Shipped'",
      "consignee": "51job, Inc."
    },
    {
      "orderNo": "vf-450061-14731220-6946546",
      "date": "11/19/2018",
      "customer": "First Trust Nasdaq Bank ETF",
      "trackingNo": "TP-360296-34158716-8748579",
      "status": "'Shipped'",
      "consignee": "Banc of California, Inc."
    },
    {
      "orderNo": "nh-869158-20027377-1730338",
      "date": "11/26/2018",
      "customer": "Tesoro Logistics LP",
      "trackingNo": "TP-856724-70838245-2686480",
      "status": "'Delivered'",
      "consignee": "Monster Beverage Corporation"
    },
    {
      "orderNo": "bs-860717-10200541-8270210",
      "date": "9/2/2019",
      "customer": "Cincinnati Bell Inc",
      "trackingNo": "TP-492571-85814660-0349071",
      "status": "'Shipped'",
      "consignee": "Equity Lifestyle Properties, Inc."
    },
    {
      "orderNo": "jb-058596-07151165-7289144",
      "date": "3/5/2019",
      "customer": "Aoxin Tianli Group, Inc.",
      "trackingNo": "TP-513205-38628888-9782643",
      "status": "'Delivered'",
      "consignee": "Conyers Park Acquisition Corp."
    },
    {
      "orderNo": "fj-247251-56031843-5498062",
      "date": "9/26/2019",
      "customer": "Eaton Vance High Income 2021 Target Term Trust",
      "trackingNo": "TP-212382-52953608-0404250",
      "status": "'Shipped'",
      "consignee": "Aclaris Therapeutics, Inc."
    },
    {
      "orderNo": "oh-814180-96216316-3921662",
      "date": "6/30/2019",
      "customer": "Gladstone Investment Corporation",
      "trackingNo": "TP-192673-26961055-3421738",
      "status": "'Shipped'",
      "consignee": "Escalade, Incorporated"
    },
    {
      "orderNo": "aw-574063-59183224-8247158",
      "date": "12/31/2018",
      "customer": "Abeona Therapeutics Inc.",
      "trackingNo": "TP-694453-53774863-1662183",
      "status": "'In Transit'",
      "consignee": "Denny's Corporation"
    },
    {
      "orderNo": "ur-469126-16262783-8495194",
      "date": "9/19/2019",
      "customer": "Global X S&P 500 Catholic Values ETF",
      "trackingNo": "TP-456258-00606933-1704614",
      "status": "'In Transit'",
      "consignee": "Targa Resources Partners LP"
    },
    {
      "orderNo": "bq-615812-31456137-4656293",
      "date": "7/15/2019",
      "customer": "Bank of Marin Bancorp",
      "trackingNo": "TP-864174-40492876-0067755",
      "status": "'Delivered'",
      "consignee": "U.S. Global Investors, Inc."
    },
    {
      "orderNo": "bs-599140-59847767-1768762",
      "date": "3/5/2019",
      "customer": "Pinnacle West Capital Corporation",
      "trackingNo": "TP-975908-38276184-2255377",
      "status": "'Delivered'",
      "consignee": "Advance Auto Parts Inc"
    },
    {
      "orderNo": "wh-033573-03622133-5288811",
      "date": "10/14/2019",
      "customer": "CapStar Financial Holdings, Inc.",
      "trackingNo": "TP-087294-94791533-2954180",
      "status": "'In Transit'",
      "consignee": "Canadian Natural Resources Limited"
    },
    {
      "orderNo": "sd-350493-29316052-7526934",
      "date": "12/11/2018",
      "customer": "Atlantic American Corporation",
      "trackingNo": "TP-102568-65971892-2401824",
      "status": "'In Transit'",
      "consignee": "Hutchison China MediTech Limited"
    },
    {
      "orderNo": "lk-574208-46343205-1183753",
      "date": "1/18/2019",
      "customer": "Echelon Corporation",
      "trackingNo": "TP-110847-66765144-7872438",
      "status": "'Delivered'",
      "consignee": "MiMedx Group, Inc"
    },
    {
      "orderNo": "iw-231731-28606511-6050207",
      "date": "11/19/2018",
      "customer": "Bay Bancorp, Inc.",
      "trackingNo": "TP-819600-35678134-7254959",
      "status": "'Shipped'",
      "consignee": "Taiwan Semiconductor Manufacturing Company Ltd."
    },
    {
      "orderNo": "vt-526189-91289745-8305033",
      "date": "6/19/2019",
      "customer": "Cemtrex Inc.",
      "trackingNo": "TP-558037-48509866-0809205",
      "status": "'Delivered'",
      "consignee": "Fulton Financial Corporation"
    }
  ])


    // ******* <Modal> *******
    const [isShowModal, setIsShowModal] = useState(false)

    // open button
    const [openModalData, setOpenModalData] = useState()

    const handleOpenModalClick = (data) => {
        setIsShowModal(true)
        setOpenModalData({
            id: data.id,
            orderNo: data.orderNo,
            date: data.date,
            customer: data.customer,
            trackingNo: data.trackingNo,
            consignee: data.consignee,
            status: data.status,
            })    
    }

   // modal changing

        let newFormData = {}
        const handleModalChangeClick = (e) => {
            e.preventDefault()

            const fieldName = e.target.getAttribute("name")
            const fieldValue = e.target.value

            newFormData = {...openModalData}
            newFormData[fieldName] = fieldValue

            setOpenModalData(newFormData) 

        }

      const handleSaveAddTableRowClick= () => {

         if(openModalData.orderNo) {
        //  Data adding using Browser Mode
                const newArray = [...data, openModalData]

                setData(newArray)

                // filtering and sorting by ID
                const newArrayFilter = newArray.filter( data => data.id !== openModalData.id)
                const newArray2 = [...newArrayFilter, openModalData]

                // sorting from ID:smaller num to ID:larger num
                const newArrayFromSmToLrId = newArray2.sort( (a,b) => a.id - b.id)

                setData(newArrayFromSmToLrId)
                setIsShowModal(false)
          } else {
           alert("Enter the order number.")
        }
      }

    // close button
     function handleCloseModalClick() {
        setIsShowModal(false)
    }
    // ******* <Modal /> *******

    // ******* <AddTableRow > *******
    const [isShowAddTableRow, setIsShowAddTableRow] = useState(false)
    
    // open button
    function handleOpenAddTableRowClick() { 
        setIsShowAddTableRow(true)
    }

    // close button
    function handleCloseAddTableRowClick() { 
        setIsShowAddTableRow(false)
    }

    // ******* <AddTableRow /> *******

    // <Table /> delete button
     const handleDeleteTableRowClick = (id) => {
        const confirm = window.confirm("Are you sure, that you want to delete this row?")
        if(confirm) {
           let dataList = data.filter(item => {
                return (
                    item.id !== id
                )
           })
           setData(dataList)
        }
    }


    return (
        <>
  
            <Table
            data={ data }
            handleOpenModalClick={ handleOpenModalClick }
            handleDeleteTableRowClick={ handleDeleteTableRowClick }  
            handleOpenAddTableRowClick={ handleOpenAddTableRowClick}        
            />

            { isShowAddTableRow &&
            <AddTableRow
            data={ data }
            setData={ setData }
            handleCloseAddTableRowClick={ handleCloseAddTableRowClick }
            /> }


            { isShowModal &&
            <Modal 
            data={ data }
            openModalData={ openModalData }
            handleCloseModalClick={ handleCloseModalClick }
            handleModalChangeClick={handleModalChangeClick}
            handleSaveAddTableRowClick={handleSaveAddTableRowClick}
            /> }
        </>
    )
}
 
export default Home