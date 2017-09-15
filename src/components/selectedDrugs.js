import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//style dla modala
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default  ({drugs, picked, deleteDrug, sendDrugs}) => {
    
    // console.log('data: ', drugs);

    const pickedDrugs = picked.map(id => {
       console.log(id);
        const name = drugs[id].name;
        // console.log(name);
        return(
            <li onClick={()=>deleteDrug(id)} key={id}>{name}<button  className='btn'>Delete</button></li>
        )
     }) 
    return(
        <div className='text-center'>
            <div className='row'>
            <p> Selected products: </p>
            </div>
            <div className='row'>
                <ul>
                    {pickedDrugs}
                    <div className='row'>
                    {/* {przekaz propsy do buttona} */}
                    <button onClick={(id) => sendDrugs(id)} className='btn btn-primary btn-send'>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

