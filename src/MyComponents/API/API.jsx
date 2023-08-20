import React, { useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import './apiStyle.css';

const API = 'https://cat-fact.herokuapp.com/facts';

export default function () {

    const weatherAPI = async () => {
        try {
            let response = await axios.get(API);
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
