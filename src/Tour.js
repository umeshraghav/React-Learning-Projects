import React, { useState } from 'react'
export default function Tour({id,image,info,name,price, removeTour}) {
   
    const [readmore, setReadmore] = useState(false)
    return (
         
        <div className="tour-Card">
                <img src={image} alt={name}/>
                <footer>
                    <div className="card-info">
                        <h4>{ name} </h4>
                        <h4 className='tour-price'>  &#x20B9; { price}</h4>
                    </div>
                    <p>
                           {readmore? info : `${info.substring(0,200)}...`}
                                <button onClick={()=>setReadmore(!readmore)}>
                                       {readmore?'Show Less': "Read More"} 
                                </button>
                     </p>
                     <button className="delete-btn" onClick={() => removeTour(id)}>
         Remove Tour
        </button>
                </footer>
        </div>
    )
}
