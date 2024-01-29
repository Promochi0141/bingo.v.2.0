import React from 'react';
import AdminBase from './Base';
import GiftAdmin from './GiftAdmin';

function AdminPage() {
    return (
        <React.Fragment>
            <AdminBase />
            <GiftAdmin />
        </React.Fragment>
    );
}

export default AdminPage;