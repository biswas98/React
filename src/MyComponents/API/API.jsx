import React, { useEffect } from 'react';
import axios from '../../axios';

import './apiStyle.css';


export default function API() {

    const weatherAPI = async () => {
        try {
            let response = await axios.get('/posts');
            console.log('successfull');
            // console.log(response.data[0].text);

        } catch (error) {
            console.log(error);
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
