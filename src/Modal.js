
const Modal = (props) => {

    const { data, handleCloseModalClick, openModalData, handleModalChangeClick, handleSaveAddTableRowClick} = props

    // input onChange

    


    return (
        <>
        { data && 
            <div className="modal">
                <div className="modal-content">
                    <span onClick={ handleCloseModalClick } className="close">&times;</span>
                        <div className="modal-body"> 
                            <div className="shipment-form">
                                <p className="details">shipment details</p>
                                <form>
                                    <p>
                                        <label htmlFor="orderNo">orderNo</label>
                                        <input type="text" id="orderNo" name="orderNo" 
                                        value={ openModalData.orderNo } 
                                        onChange={ handleModalChangeClick }
                                        />
                                    </p>
                    
                                    <p>
                                        <label htmlFor="date">date</label>
                                        <input type="date" id="date" name="date" 
                                        value={ openModalData.date }
                                        onChange={ handleModalChangeClick }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="customer">customer</label>
                                        <input type="text" id="customer" name="customer" value={ openModalData.customer }
                                        onChange={ handleModalChangeClick }

                                         />
                                    </p>

                                    <p>
                                        <label htmlFor="trackingNo">trackingNo</label>
                                        <input type="text" id="trackingNo" name="trackingNo" value={ openModalData.trackingNo }
                                        onChange={ handleModalChangeClick }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="consignee">consignee</label>
                                        <input type="text" id="consignee" name="consignee" value={ openModalData.consignee }
                                        onChange={ handleModalChangeClick }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="status">status</label>
                                        <input type="text" id="status" name="status" value={ openModalData.status }
                                        onChange={ handleModalChangeClick }


                                        />
                                    </p>

                                </form>
                                    <button onClick={handleSaveAddTableRowClick} className="btn-shipment btn-shipment-save">Save</button>
                                    <button onClick={ handleCloseModalClick } className="btn-shipment btn-shipment-close">Close</button>
                            </div>
                        </div>
                </div>
         </div>
          }
        
        </>
    )
}


export default Modal