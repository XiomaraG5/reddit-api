import React, { useEffect, useState } from 'react'
import axios from "axios"
import { TOPIC } from '../services/urls';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ModalCard from '../containers/ModalCard';
import BtnTop from '../containers/BtnTop';


const CardsTopics = () => {
    const 
    [data,setData]=useState(),
    [loading,setLoading]=useState(true),
    [show,setShow]=useState(false),
    [item,setItem]=useState({}),
    navigate = useNavigate(),
    params = useLocation(),
    {src}=params.state,
    getData= async()=>{
        try{

            const 
            res = await  axios.get(TOPIC(src)),
            dat = await res.data.data.children
            console.log(dat);
            setData( dat)
            setLoading(false)
        }
        catch(e){
            console.log(e);
        }
    },
    ShowDetails =(e)=>{
        setItem(e)
        setShow(true)
    }

  useEffect(()=>{
    getData()
 },[])       
        
    
  return (
    <div className='d-flex flex-column'>

        <div className='mt-2' onClick={()=>navigate('/')}>
            <i className="bi bi-arrow-right-circle-fill float-right mr-2 mb-2"> Go back</i>
        </div>

        {!loading ?
        <div className="d-flex mt-3 px-2 flex-wrap justify-content-center">
            <BtnTop/>
            {
            data&&data.map((e,i)=>
                <div key={e.data.id}  className="card m-2"  onClick={()=>ShowDetails(e)}>

                    <div className="card-body">
                        <img src={e.data.thumbnail}  alt={e.data.author}/>
                        <div className="Card_index"><p>{i+1}</p></div>
                        <h3 className="titles">{e.data.title}</h3>
                        <p>Author: <i> {e.data.author} </i></p>
                        <p>score:
                            <i style={e.data.score >1000?{color:'greenyellow'}: e.data.score >300?{color:'yellow'}: {color:'red'}}> {e.data.score} </i>
                        </p>
                    </div>

            </div>)
            }
            {show&&<ModalCard item={item} setShow={setShow} show={show} />}
        </div>:
        
        <div className="d-flex justify-content-center w-100">
            <strong>Loading...</strong>
            <Spinner animation="border" variant="secondary" />
        </div>}
    </div>
  )
}

export default CardsTopics