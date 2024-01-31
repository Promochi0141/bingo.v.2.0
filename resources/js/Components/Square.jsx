import React from 'react';

const Square = ({ value }) => {
    return (
        <div className="w-16 h-16 flex justify-center items-center border border-white-4 m-4 p-4">
            {value}
        </div>
    );
};

export default Square;
