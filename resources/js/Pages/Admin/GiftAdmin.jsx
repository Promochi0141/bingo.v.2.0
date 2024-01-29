import React, { useState } from 'react';
import AdminLeyout from '@/Layouts/AdminLayout';

function GiftAdmin({ gifts }) {
    const [editedGifts, setEditedGifts] = useState(gifts || []);

    const handleEdit = (id, newName) => {
        // API call to update the gift with the given id
    };

    const handleDelete = (id) => {
        // API call to delete the gift with the given id
    };

    return (
        <React.Fragment>
            <AdminLeyout children={
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
                                    <input
                                        type="text"
                                        value={gift.name}
                                        onChange={(e) => handleEdit(gift.id, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(gift.id, gift.name)}>Confirm</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(gift.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            } />
        </React.Fragment>
    );
}

export default GiftAdmin;