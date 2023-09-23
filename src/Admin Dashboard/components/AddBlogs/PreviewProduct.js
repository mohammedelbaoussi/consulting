const PreviewBlog = ({Blog}) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="review">
                    <button>preview</button>
                    <h2>{Blog?.title}</h2>
                    <img src={Blog?.thumbnail}/>
                    <p>{Blog?.description}</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default PreviewBlog;