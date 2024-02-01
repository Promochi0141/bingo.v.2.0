import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowMessage = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = () => {
        axios.get('/api/messages')
            .then(response => {
                setMessages(response.data.filter(message => message.contents));
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchMessages();

        const bombButton = document.querySelector('.bomb');
        bombButton.addEventListener('click', fetchMessages);

        return () => {
            bombButton.removeEventListener('click', fetchMessages);
        };
    }, []);

    return (
        <React.Fragment>
            {
                messages.length > 0 && messages.some(message => message.contents) && (
                    <div className="m-1 border border-white-1 rounded">
                        {messages.map((message, index) => (
                            message.contents && (
                                <div key={index} className="pl-4 bg-gray-800 text-green-500 border-green-1 py-2">
                                    {message.contents}
                                </div>
                            )
                        ))}
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default ShowMessage;