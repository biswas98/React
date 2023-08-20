import React, { useEffect } from 'react';

import './apiStyle.css';

const weatherAPI = async () =>{
    
    const url = 'https://animechan.xyz/api/quotes'

    let response = await fetch(url);
    response = await response.json();
}

export default function () {
  return (
    <div className='apiContainer'>
        <div className="quotes">
            
        </div>
    </div>
  )
}
