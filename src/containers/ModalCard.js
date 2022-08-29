import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { BASE } from '../services/urls';
const ModalCard = ({show,setShow,item}) => {
    console.log(item);
  return (
    <Modal show={show} onHide={()=>setShow(false)}>
        
        <div key={item.data.id}  className="card ModalCard m-2" >
            <div onClick={()=>setShow(false)}>
                <i class="bi bi-x-circle-fill float-right mr-2 mb-2"></i>
            </div>
            <div className="card-body ">
                <img src={item.data.thumbnail}  alt={item.data.author}/>
                <div className="Card_index"></div>
                <h3 className="titles">{item.data.title}</h3>
                <p>Author: <i> {item.data.author} </i></p>
                <p>score:
                    <i style={item.data.score >1000?{color:'greenyellow'}: item.data.score >300?{color:'yellow'}: {color:'red'}}> {item.data.score} </i>
                </p>
                <a className='link' href={BASE+item.data.url} target="_blank" rel="noreferrer"> Ir a la pagina</a >
            </div>
        </div>
    </Modal>
  )
}

export default ModalCard