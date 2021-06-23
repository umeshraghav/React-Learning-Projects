import React, {useState, useEffect} from 'react'
import './App.css';
import Tours from './Tours'
import Loading from './Loading'
function App() {

  const[loading, setLoading] =  useState(true)
  const [tours, setTours] = useState([])
  const API ='https://course-api.com/react-tours-project'


  const fetchApi = async ()=>{

          setLoading(true);

          try{
            let data = await fetch(API);
            setLoading(false);
             const tours = await data.json();
            
             setTours(tours);
             

          }catch(er){
            setLoading(false)
          }

    
  } 

    useEffect(() => {
      fetchApi();
  }, [])
 

const removeTour = (id)=>{
  const newTours = tours.filter((tt)=> tt.id !== id )
  setTours(newTours)
}

  if(loading){
    return(
      <div>
      <Loading></Loading>
      </div>
    )
  }


if(tours.length===0){
  return(
    <div className="main">
        <div className="title">
            <h2>No Tour Left</h2>
            <button className="btn" onClick={()=>fetchApi()}>Refresh</button>
        </div>
    </div>
  )
}
else
  return (
   
    <div className="main">
       
      <Tours tours={tours} removeTour={removeTour}/>
     
    </div>
  );

}

export default App;
