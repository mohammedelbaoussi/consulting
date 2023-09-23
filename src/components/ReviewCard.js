import {FaStar} from 'react-icons/fa'

const ReviewCard = () => {
    return ( 
        <div className="reviewcard">
            <div className="imgContainer">
                <img src={require('../images/blog1.jpg')} alt="" />
            </div>
            <h5>Customer's Name</h5>
            <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis fugiat blanditiis officia alias laborum</p>
        </div>
     );
}
 
export default ReviewCard;