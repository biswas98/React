import React, { useEffect } from 'react';

import './apiStyle.css';

const weatherAPI = async () =>{
    
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${place}`

    let response = await fetch(url);
    response = await response.json();
}

export default function () {
  return (
    <div className='apiContainer'>
        <input type="text" />
        <button onClick={weatherAPI}>Click</button>
    </div>
  )
}
