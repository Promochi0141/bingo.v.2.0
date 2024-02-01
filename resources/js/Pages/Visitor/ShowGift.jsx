import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowGift = () => {
    const [gifts, setGifts] = useState([]);

    const fetchGifts = () => {
        axios.get('/api/gifts')
            .then(response => {
                setGifts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchGifts();

        const bombButton = document.querySelector('.bomb');
        bombButton.addEventListener('click', fetchGifts);

        return () => {
            bombButton.removeEventListener('click', fetchGifts);
        };
    }, []);

    return (
        <div className='bg-gray-800 border border-white-1 m-1'>
            <h1 className='text-xl m-4 bg-white text-black py-2 text-center font-bold w-1/3'>のこり景品</h1>
            <div className="pt-8 px-0.5 pb-4 m-1 rounded flex justify-center items-center text-center font-bold bg-gray-800">
                <table className='text-cyan-400 w-4/5 border-separate border border-cyan-400'>
                    <tbody>
                        <th className='bg-gray-900 text-blue-500 border-cyan-400 border py-3'>
                            景品名
                        </th>
                        {gifts.map((gift, index) => (
                            <tr key={index}>
                                <td className="py-3 border border-cyan-400 bg-gray-900">{gift.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowGift;