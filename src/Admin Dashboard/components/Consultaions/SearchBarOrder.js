const SearchBarOrder = () => {
    return ( 
       
            <div className="p-3 border">
            <div className="row">
                <div className="col-6"> 
                    <div className="p-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                    </div>    
                </div>
                <div className="col-6">
                    <div className="p-3 d-flex justify-content-end ">
                        <div className=" me-3">
                            <div className="dropdown ">
                                <button className="btn border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Status
                                </button>
                                <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1" >
                                    <li><a className="dropdown-item" href="#">Delivered</a></li>
                                    <li><a className="dropdown-item" href="#">Not Delivered</a></li>
                                </ul>
                            </div>
                        </div> 
                        <div>
                            <div className="dropdown">
                                <button className="btn border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Latest added
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li ><a className="dropdown-item" href="#">Show last 10</a></li>
                                    <li><a className="dropdown-item" href="#">Show last 20</a></li>
                                    <li><a className="dropdown-item" href="#">Show last 30</a></li>
                                    <li><a className="dropdown-item" href="#">Show all orders</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default SearchBarOrder;