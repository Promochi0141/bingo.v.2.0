import React from 'react';

const Square = ({ value }) => {
    return (
        <div className="w-12 h-12 flex justify-center items-center border border-white-4 mx-2 my-3 p-3">
            {value}
        </div>
    );
};

export default Square;
