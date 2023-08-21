import React, { useEffect, useState } from 'react';
import axios from '../../axios';

import './apiStyle.css';


export default function API() {
    const [data, setData] = useState();

    const weatherAPI = async () => {
        try {
            let response = await axios.get('/posts');
            // console.log('successfull');
            setData(response.data);

        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        weatherAPI();
    }, [])
    
    return (
        <div className='apiContainer'>
            <div className="quotes">

            </div>
        </div>
    )
}
