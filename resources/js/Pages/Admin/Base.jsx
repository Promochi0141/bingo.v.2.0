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
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map(row => (
                            <tr key={row.id} className={row.status ? 'bg-green-100' : 'bg-gray-200'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {row.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {row.status ? "表示中" : "非表示中"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        onClick={() => toggleStatus(row.id)}
                                    >
                                        変更
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