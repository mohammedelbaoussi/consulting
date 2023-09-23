import { Link } from 'react-router-dom';
import './APropos.css'
import { FaBookBookmark } from 'react-icons/fa6';

const APropos = () => {
    return ( 
        <>
            <div className="aproposTitle text-center mt-5" style={{height:'5.5rem'}}>
                <h1 className="fw-bold">À PROPOS DE NOUS</h1> 
            </div>
        <div className="apropos">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center flex-column align-items-center">

                    <div className="aproposC text-center " >
                        
                            <p className="">Notre cabinet est composé d’experts juridique, de conseillers, de médiateurs, d’arbitres et de formateurs de haut niveau spécialisés en droit et fiscalité des affaires, et ce afin de vous accompagner avec efficience et déterminer les solutions les plus appropriées à votre. 
                        </p>
                        <Link to='/apropos'> En savoir plus</Link>
                        
                        
                    </div>
                    </div>
                    <div className="col-md-6 col-12">

                    <div className="aproposC text-center d-flex justify-content-center flex-column align-items-center" >
                       <img src={require('../images/logoWhite.png')} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default APropos;