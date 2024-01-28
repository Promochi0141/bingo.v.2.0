import AdminLeyout from '@/Layouts/AdminLayout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminBase = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/numbers');
            setData(result.data);
        };

        fetchData();
    }, []);

    const toggleStatus = async (id) => {
        try {
            const response = await axios.post(`/api/numbers/toggle/${id}`);
            if (response.status === 200) {
                setData(data.map(item => item.id === id ? response.data : item));
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <React.Fragment>
            <AdminLeyout children={
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.status.toString()}</td>
                                <td>
                                    <button onClick={() => toggleStatus(row.id)}>
                                        Toggle
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            } />
        </React.Fragment>
    );
};

export default AdminBase;