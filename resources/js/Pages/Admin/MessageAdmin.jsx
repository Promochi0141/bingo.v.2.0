import React, { useState, useEffect } from 'react';

function MessageAdmin() {
    const [messages, setMessages] = useState([]);
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        fetch('/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleEdit = (id, newContent) => {
        fetch(`/api/messages/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: newContent })
        })
            .then(response => response.json())
            .then(updatedMessage => {
                setMessages(messages.map(message =>
                    message.id === updatedMessage.id ? updatedMessage : message
                ));
            })
            .catch(error => console.error('Error:', error));
    };

    const handleDelete = (id) => {
        fetch(`/api/messages/${id}`, { method: 'DELETE' })
            .then(() => {
                setMessages(messages.filter(message => message.id !== id));
            })
            .catch(error => console.error('Error:', error));
    };

    const handleCreate = () => {
        fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: '' })
        })
            .then(response => response.json())
            .then(newMessage => {
                setMessages([...messages, newMessage]);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changed Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confirm</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {messages.map((message) => (
                        <tr key={message.id} className='bg-gray-200'>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.contents}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <textarea onChange={e => setNewContent(e.target.value)} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button onClick={() => handleEdit(message.id, newContent)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">変更確定</button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button onClick={() => handleDelete(message.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700">行削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mx-8 my-2.5">
                <button onClick={handleCreate} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    新規行を追加
                </button>
            </div>
        </div>
    );
}

export default MessageAdmin;