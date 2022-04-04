import TableData from "./TableData"

const Table = (props) => {

    const { 
        data,
        handleOpenModalClick,
        handleDeleteTableRowClick,
        handleOpenAddTableRowClick,

    } = props

    return ( 
        <>
            <div className="main">
                <table className="main-table">
                    <thead>
                        <tr className="main-table-header ">
                            {/* <td>id</td> */}
                            <td>order no</td>
                            <td>delivery date</td>
                            <td>customer</td>
                            <td>tracking no</td>
                            <td>status</td>
                            <td>consignee</td>
                            <td><button onClick={ handleOpenAddTableRowClick }>Add Tracking</button></td>
                        </tr>
                    </thead>
                        <tbody>
                            <TableData
                            data = { data } 
                            handleOpenModalClick={handleOpenModalClick}
                            handleDeleteTableRowClick={handleDeleteTableRowClick}
                            />
                        </tbody>
                </table>
            </div>
        </>
    )
}
 
export default Table