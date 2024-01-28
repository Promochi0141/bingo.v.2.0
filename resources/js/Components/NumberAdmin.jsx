import React, { useState } from 'react';
import axios from 'axios';

const NumberAdmin = ({ initialData }) => {
    const [data, setData] = useState(initialData);

    const toggleBoolean = async (id) => {
        try {
            const response = await axios.post(`/api/toggle/${id}`);
            if (response.status === 200) {
                setData(data.map(item => item.id === id ? response.data : item));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Boolean</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.boolean.toString()}</td>
                        <td>
                            <button onClick={() => toggleBoolean(row.id)}>
                                Toggle
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NumberAdmin;