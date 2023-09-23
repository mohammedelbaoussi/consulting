import { useParams } from 'react-router-dom';
// import '../pages/BlogDetails.css'
import { useAddReviewMutation } from '../features/Reviews/ReviewsSliceApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AddReview = () => {

    const initialState  ={content:'',blog_id: '' }

    const {token} = useSelector(state => state.Auth)

    const [Review, setReview] = useState(initialState)
    const [addReview] = useAddReviewMutation()

    const {id} = useParams()
    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setReview({...Review, [name]: value})
        
    }

    const handleClick = async ()=>{
        const comment = {...Review, blog_id: id }
        await addReview(comment)
    }
    return ( 
        <div className="addcomment ">
            <h4>Ajouter des Commentaires:</h4>
            {
                token?
                <div className="WriteComment text-center col-md-6  col-12 ">
                    <input className='w-100 border' type="text" 
                    name='content'
                    value={Review?.content}
                    onChange={ChangeInput}
                    placeholder="Vos Commentaires"/>

                    <button className='btn mt-2' style={{backgroundColor: '#0160a0', color: '#fff'}} onClick={handleClick}>Add</button>
                </div>
                :
                <div className="alertLogin">
                    <span>Veuillez vous connecter pour ajouter un commentaire</span>
                </div>
            }
        </div>
     );
}
 
export default AddReview;