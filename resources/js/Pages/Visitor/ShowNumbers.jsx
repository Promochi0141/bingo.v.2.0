import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Square from '@/Components/Square';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const ShowNumbers = () => {
    const [numbers, setNumbers] = useState([]);

    const fetchNumbers = () => {
        axios.get('/api/numbers')
            .then(response => {
                setNumbers(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    useEffect(() => {
        fetchNumbers();
    }, []);

    return (
        <React.Fragment>
            <div className='text-white'>
                <div className='text-right'>
                    <button onClick={fetchNumbers} className='border bg-gray-800 hover:bg-gray-900 rounded border-white-1 p-2'>
                        <FontAwesomeIcon icon={faSync} /> 最新の情報に更新
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {numbers.filter(number => number.status).map((number, index) => (
                        <Square key={index} value={number.id} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShowNumbers;