import React from 'react';
import VisitorHeader from "@/Layouts/VisitorHeader";
import VisitorFooter from "@/Layouts/VisitorFooter";
import ShowNumbers from './ShowNumbers';

const App = () => {
    return (
        <React.Fragment>
            <VisitorHeader />
            <main className="bg-black px-1.5 py-4">
                <ShowNumbers />
            </main>
            <VisitorFooter />
        </React.Fragment>
    );
};

export default App;