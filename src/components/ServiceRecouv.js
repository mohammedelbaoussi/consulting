import { Link } from 'react-router-dom';
import './ServiceRecouv.css'

const ServiceRecouv = () => {
    return ( 
        <>
        <div className="aproposTitle text-center mt-5" style={{height:'5.5rem'}}>
        <h1 className="fw-bold">Nos Services de Recouvrement</h1> 
    </div>
        <div className="serviceRecouv">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                    <div className="Recouv text-center " >
                        
                        <p className="">Notre cabinet est composé d’experts juridique, de conseillers, de médiateurs, d’arbitres et de formateurs de haut niveau spécialisés en droit et fiscalité des affaires, et ce afin de vous accompagner avec efficience et déterminer les solutions les plus appropriées à votre. 
                    </p>
                    <Link to='/apropos'> En savoir plus</Link>
                    
                    
                </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ServiceRecouv;