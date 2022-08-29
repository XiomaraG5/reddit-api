import { useEffect, useState } from "react";
import { API } from "../services/urls";
import axios from "axios"
import {  useNavigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import BtnTop from "../containers/BtnTop";

function App() {
  const [data,setData]=useState(),
        [loading,setLoading]=useState(true),
        navigate = useNavigate(),
        getData= async()=>{
        const 
        res = await  axios.get(API),
        dat = await res.data.data.children
        console.log(dat);
        setData( dat)
        setLoading(false)
        };

  useEffect(()=>{getData()},[])
console.log("kfddsajf",data);
  return (
    <div className="position-relative" >
    
      <header className="App-header d-flex flex-sm-row  justify-content-sm-center flex-column justify-content-md-around align-items-center  mt-3 header">
 
        <p>Find and enjoy the best topics from reddit</p>
      </header>
        <h3 className="mt-5 titles ml-2">Topics:</h3>
      {!loading ?
        <main className="d-flex mt-3 px-2 flex-wrap justify-content-center " id="main">
          <BtnTop/>
            {
              data&&data.map((e,i)=>
              <div key={e.data.id} className="card m-2" onClick={()=>(navigate('/topics',{state:{src:e.data.url}}))}>
                <div className="card-body">
                  <img src={e.data.banner_img}  alt={e.data.name}/>
                  <div className="Card_index"><p>{i+1}</p></div>
                  <h3 className="titles">{e.data.title}</h3>
                  <p>Category: <i> {e.data.advertiser_category} </i></p>
                  <p>Subscribers: <i> {e.data.subscribers} </i></p>
                </div>
              </div>)
            }
        </main>:
        <div className="d-flex justify-content-center w-100">
            <strong>Loading...</strong>
            <Spinner animation="border" variant="secondary" />
        </div>
      }
    </div>
  );
}

export default App;
