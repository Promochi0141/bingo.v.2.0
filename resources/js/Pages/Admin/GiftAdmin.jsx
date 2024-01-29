import React, { useState, useEffect } from 'react';

function GiftAdmin({ gifts }) {
    const [editedGifts, setEditedGifts] = useState([]);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        fetch('/api/gifts')
            .then(response => response.json())
            .then(data => setEditedGifts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleEdit = (id, newName) => {
        fetch(`/api/gifts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName }),
        })
            .then(response => response.json())
            .then(updatedGift => {
                // 更新されたギフトを状態に反映する
                setEditedGifts(editedGifts.map(gift => gift.id === updatedGift.id ? updatedGift : gift));
            })
            .catch(error => console.error('Error:', error));
    };

    const handleDelete = (id) => {
        fetch(`/api/gifts/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setEditedGifts(prevGifts => prevGifts.filter(gift => gift.id !== id));
            });
    };

    const handleCreate = () => {
        const newGift = { name: 'newgift' }; // 新しいギフトの初期データを設定

        fetch('/api/gifts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGift), // 送信するデータをJSON形式に変換
        })
            .then(response => response.json())
            .then(createdGift => {
                setEditedGifts(prevGifts => [...prevGifts, createdGift]);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <React.Fragment>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changed Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confirm</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {editedGifts.map((gift) => (
                        <tr key={gift.id} className='bg-gray-200'>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{gift.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <input type="text" onChange={e => setNewName(e.target.value)} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button onClick={() => handleEdit(gift.id, newName)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">変更確定</button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button onClick={() => handleDelete(gift.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700">行削除</button>
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
        </React.Fragment>
    );
}

export default GiftAdmin;