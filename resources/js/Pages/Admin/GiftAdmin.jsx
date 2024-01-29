import React, { useState, useEffect } from 'react';
import AdminLeyout from '@/Layouts/AdminLayout';

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
            <AdminLeyout children={
                <React.Fragment>
                    <button onClick={handleCreate}>新規作成</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Changed Name</th>
                                <th>Confirm</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editedGifts.map((gift) => (
                                <tr key={gift.id}>
                                    <td>{gift.name}</td>
                                    <td>
                                        <input type="text" onChange={e => setNewName(e.target.value)} />
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(gift.id, newName)}>Confirm</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(gift.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </React.Fragment>
            } />
        </React.Fragment>
    );
}

export default GiftAdmin;