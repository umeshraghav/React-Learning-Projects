import React from 'react'
import Tour from './Tour'
export default function Tours({tours, removeTour}) {

 

    return (
 
           <div>
                 <div className="title">
                      <h2>My tours {tours.count}</h2>
                    <div className="underline"></div>
             </div>
              {tours.map((tt)=>{
                  return <Tour key={tt.id} {...tt} removeTour={removeTour}/>
              })}
           </div>
            
    )
}
