import AdminLeyout from '@/Layouts/AdminLayout';
import React from 'react';

export default function AdminBase() {
    return (
        <React.Fragment>
            <AdminLeyout children={
                <p>must fill</p>
            } />
        </React.Fragment>
    );
}