import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";
import NavBar from "../components/NavBar";
import FooterPage from "../components/FooterPage";
import './Root.css'
import { useRefreshtokenQuery } from "../features/Auth/AuthApiSlice";
import { useSelector } from "react-redux";
const Root = () => {

    useRefreshtokenQuery()


    const [fix, setFix] = useState(false)
    function setFixed() {
  
        if(window.pageYOffset >= 80){
            setFix(true)
        }else{
            setFix(false)

        }
    }


    window.addEventListener("scroll", setFixed)
    return ( 
        <div className="Root">
            <NavBar/>
            <div className={fix? 'header2 sticky-top fixed' : "header2 sticky-top"}>
                <Nav/>
            </div>
            <Outlet/>
            <FooterPage/>
        </div>
     );
}
 
export default Root;