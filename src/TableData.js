const TableData = (props) => {

    const { data, handleOpenModalClick, handleDeleteTableRowClick } = props

    
    return (
        <>
        { data.map( (data, i) => (  // (data, i) second argument is index
            <tr key={data.id = i+1 } >
                {/* <td className='main-data id'>{ data.id }</td> */}
                <td className='main-data order'> { data.orderNo } </td>
                <td className='main-data date'> { data.date } </td>
                <td className='main-data customer'> { data.customer } </td>
                <td className='main-data trackingNo'> { data.trackingNo } </td>
                <td className='main-data status'> { data.status }</td>
                <td className='main-data consignee'> { data.consignee } </td>
            
                <td className='main-data-btn'>
                    <button onClick={ () => handleOpenModalClick(data) } className="btn-open main-data-btn"></button>
                    <button onClick={ () => handleDeleteTableRowClick(data.id) } className="btn-delete main-data-btn"></button>
                </td>
            
                <td className='main-data-btn'>
                </td>
            </tr>

        ))}
        </>
    )
}
 
export default TableData