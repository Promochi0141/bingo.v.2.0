// ShowNumbers.jsx
import React, { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import io from 'socket.io-client';
import Square from '@/Components/Square';

const ShowNumbers = () => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'socket.io',
            host: window.location.hostname + ':6001',
            client: io
        });

        echo.channel('ShowNumbers')
            .listen('.NumberUpdated', (e) => {
                // データベースから新しいデータを取得し、numbersを更新
                axios.get('/api/numbers') // APIエンドポイントを呼び出す
                    .then(response => {
                        setNumbers(response.data); // 取得したデータをnumbersに設定
                    })
                    .catch(error => {
                        console.error('There was an error!', error);
                    });
            });
    }, []);

    return (
        <div className="grid grid-cols-5 gap-4">
            {numbers.map((number, index) => (
                <Square key={index} value={number.id} />
            ))}
        </div>
    );
};

export default ShowNumbers;