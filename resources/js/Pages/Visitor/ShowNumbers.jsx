import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Square from '@/Components/Square';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import '@css/animation.css';

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
            <div className="text-white border-white-2 border mx-1 mb-1 px-1 pb-4">
                <div className='flex justify-between items-center text-right px-2 pt-4 pb-12'>
                    <h1 className='text-xl m-2 bg-white text-black px-5 py-2 text-center font-bold'>一覧</h1>
                    <button onClick={fetchNumbers} className='p-2 border border-white-1 bg-blue-600 hover:bg-blue-900'>
                        <FontAwesomeIcon icon={faSync} /> 最新の情報に更新
                    </button>
                </div>
                <TransitionGroup className="grid grid-cols-5">
                    {numbers
                        .filter(number => number.status)
                        .sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at))
                        .map((number, index) => (
                            <CSSTransition key={index} timeout={500} classNames="item rotate">
                                <Square value={number.id} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </div>
        </React.Fragment>
    );
}

export default ShowNumbers;