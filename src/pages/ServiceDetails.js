import './ServiceDetails.css'
import {FaFacebook, FaTwitter, FaLinkedinIn, FaShare} from 'react-icons/fa'

const ServiceDetails = () => {
    
    return ( 

            <div className="blogDetails " style={{marginBottom: '13rem'}}>
                <div className="headhead">
                    <div className="container">
                        <div className="row">
                            <h2 style={{color: "#ffff"}}>Title du Blog</h2>
                        </div>
                </div>
                </div>
                <div className="container my-5">
                <div className="row">
                    <div className="blog">
                        <div className="blogImg">
                            <img src={require('../images/image-2-b.jpg')} alt="" />
                        </div>

                        
                    <h5>Titre du Blog</h5>
                    <p className='content border-bottom'>blog content</p>
                    </div>
                    <div className="share">
                        <span><FaShare/></span>
                        <span className='Partager'>Partager: </span>
                        <span className='Sicon'><FaFacebook/></span>
                        <span className='Sicon'><FaTwitter/></span>
                        <span className='Sicon'><FaLinkedinIn/></span>
                    </div>
                </div>
                </div>
            </div>
);
}
 
export default ServiceDetails;