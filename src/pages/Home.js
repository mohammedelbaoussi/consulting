import Welcome from "../components/Welcome";
import APropos from "../components/APropos";
import DerniersBlogs from "../components/DerniersBlogs";
import AvieClients from "../components/AvieClients";
import ServicesC from "../components/ServicesC";
import ServiceRecouv from "../components/ServiceRecouv";



const Home = () => {


    return ( 
           <>
            <Welcome/>
            <APropos/>
            <ServicesC/>
            <ServiceRecouv/>
        {/* <DerniersBlogs/> */}
            {/* <AvieClients/> */}
           </>
                
 
     );
}
 
export default Home;
