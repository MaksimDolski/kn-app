const NewModal = (props) => {

    const { handleCloseAddTableRowClick, handleAddFormChange, handleSaveAddTableRowClick} = props

    return (
        <>
            
            <div className="modal">
                <div className="modal-content">
                    <span onClick={ handleCloseAddTableRowClick } className="close">&times;</span>
                        <div className="modal-body"> 
                            <div className="shipment-form">
                                <p className="details">shipment details</p>
                                 <form>
                                    <p>
                                        <label htmlFor="orderNo">orderNo</label>
                                        <input type="text" id="orderNo" name="orderNo" onChange={ handleAddFormChange } />
                                    </p>
                    
                                    <p>
                                        <label htmlFor="date">date</label>
                                        <input type="date" id="date" name="date" placeholder="dd/mm/yyyy" onChange={ handleAddFormChange } />
                                    </p>

                                    <p>
                                        <label htmlFor="customer">customer</label>
                                        <input type="text" id="customer" name="customer" onChange={ handleAddFormChange } />
                                    </p>

                                    <p>
                                        <label htmlFor="trackingNo">trackingNo</label>
                                        <input type="text" id="trackingNo" name="trackingNo" onChange={ handleAddFormChange } />
                                    </p>

                                    <p>
                                        <label htmlFor="consignee">consignee</label>
                                        <input type="text" id="consignee" name="consignee" onChange={ handleAddFormChange } />
                                    </p>

                                    <p>
                                        <label htmlFor="status">status</label>
                                        <input type="text" id="status" name="status"  onChange={ handleAddFormChange } />
                                    </p>

                                </form>
                                        <button onClick={ handleSaveAddTableRowClick} className="btn-shipment btn-shipment-save">Save</button>
                                        <button onClick={ handleCloseAddTableRowClick } className="btn-shipment btn-shipment-close">Close</button>
                            </div>
                        </div>
                </div>
            </div>
        
        

    </>

    )
}

export default NewModal