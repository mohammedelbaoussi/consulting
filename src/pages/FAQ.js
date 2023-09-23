import { useEffect, useState } from "react";
import data from "./data";
import './FAQ.css'

const FAQ = () => {

useEffect(()=>{
  console.log(data)
},[])

  const  [collapse, setCollapse] = useState(0)

    const toggle = (i) => {
        if(collapse === i){
            return setCollapse(null)
        }
        setCollapse(i)
    }
    return ( 
        <div className="faq">
            <div className="headhead">
                <div className="container">
                    <div className="row">
                        <h2 style={{color: '#fff'}}>FAQ clients</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="faqContainer p-3" style={{marginTop: '12rem', marginBottom: '9rem'}}>
                                 {
                       data && data.map((item, i)=> (
                        <div className="item" key={i}>
                            <div className="title d-flex "onClick={()=> toggle(i)} >
                                <div className={collapse===i? ' plus plusC':'plus moinsC'}>
                                    <span>{collapse === i? '-': '+'}</span>
                                </div>
                                 
                              <span className="ms-2" style={{fontWeight: '700'}}>{item.question}</span>
                            </div>
                            
                            <div className={ collapse ===i? 'content show': 'content hide'}>

                              <p>{item.answer}</p>
                            </div>
                        </div>
                           
                           ))
                    }
                    </div>
           
                </div>
            </div>
        </div>
     );
}
 
export default FAQ;