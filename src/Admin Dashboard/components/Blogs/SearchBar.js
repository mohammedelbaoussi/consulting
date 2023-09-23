const SearchBar = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
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
                                                All categories
                                            </button>
                                            <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1" >
                                                <li><a className="dropdown-item" href="#">Category 1</a></li>
                                                <li><a className="dropdown-item" href="#">Category 2</a></li>
                                                <li><a className="dropdown-item" href="#">Category 3</a></li>
                                            </ul>
                                        </div>
                                    </div> 
                                    {/* <div>
                                        <div className="dropdown">
                                            <button className="btn border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Latest added
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li ><a className="dropdown-item" href="#">Category 1</a></li>
                                                <li><a className="dropdown-item" href="#">Category 1</a></li>
                                                <li><a className="dropdown-item" href="#">Category 1</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
     );
}
 
export default SearchBar;