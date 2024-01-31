import React from 'react';
import VisitorHeader from "@/Layouts/VisitorHeader";
import VisitorFooter from "@/Layouts/VisitorFooter";
import ShowNumbers from './ShowNumbers';

const App = () => {
    return (
        <React.Fragment>
            <VisitorHeader />
            <main className="bg-black p-4">
                <p className='text-white'>テスト</p>
            </main>
            <ShowNumbers />
            <VisitorFooter />
        </React.Fragment>
    );
};

export default App;