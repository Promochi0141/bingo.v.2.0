import React from 'react';
import VisitorHeader from "@/Layouts/VisitorHeader";
import VisitorFooter from "@/Layouts/VisitorFooter";
import ShowNumbers from './ShowNumbers';
import ShowMessage from './ShowMessage';
import ShowGift from './ShowGift';

const App = () => {
    return (
        <React.Fragment>
            <VisitorHeader />
            <main className="bg-black px-1.5 py-4">
                <ShowMessage />
                <ShowNumbers />
                <ShowGift />
            </main>
            <VisitorFooter />
        </React.Fragment>
    );
};

export default App;