import DashStatistics from "../../components/Dashboard/DashStatistics";
import DashTotal from "../../components/Dashboard/DashTotal";
import LatestOrders from "../../components/Dashboard/LatestOrders";
import './style.css'

const Dashboard = () => {
    return ( 
        <div className="container dashContainer">
                <div className="row">
                    <div className=" dashtitle">
                        Dashboard
                    </div>
                    <DashTotal/>
                       
                    {/* <DashStatistics/> */}
                  
                    <LatestOrders/>
            </div>
        </div>
     );
}
 
export default Dashboard;