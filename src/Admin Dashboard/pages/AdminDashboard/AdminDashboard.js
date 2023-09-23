import {  Outlet } from "react-router-dom";
import NavSideBar from "../../components/NavSideBar";
import DashNav from "../../components/DashNav";
import './style.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import NotFound from '../../../pages/NotFound'
import { useRefreshtokenQuery } from "../../../features/Auth/AuthApiSlice";

const AdminDashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false) 
    useRefreshtokenQuery()
    const {user} = useSelector(state => state.Auth)


    return (
  <>
            {
                
                user &&  user.role === 'admin' ? 

                <div className="container-fluid px-0 dashboadContainer ">
                    <div className="row mx-0 ">
                    <NavSideBar showSideBar= {showSideBar} setShowSideBar={setShowSideBar}/>
                    
                        <div className="col px-0  " >
                            <div className="search-bar d-flex justify-content-center align-items-center">  <DashNav showSideBar={showSideBar} setShowSideBar={setShowSideBar}/> </div>
                            <div className="main-outlet-admindashboard ">
                            <Outlet/> 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                :
                <NotFound/>
            }
  </>


     );
}
 
export default AdminDashboard;