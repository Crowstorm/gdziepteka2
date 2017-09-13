import React from 'react';

export default ({drugs, picked}) => {
    // console.log('data: ', drugs);
    const pickedDrugs = picked.map(id => {
       console.log(id);
        const name = drugs[id-1].name;
        // console.log(name);
        return(
            <li key={id}>{name}</li>
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
                    <button className='btn btn-primary btn-send'>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}