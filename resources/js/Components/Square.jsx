import React from 'react';

const Square = ({ value }) => {
    return (
        <div className="font-bold w-12 h-12 flex justify-center text-rose-400 items-center border border-rose-400 mx-2 my-3 p-3">
            {value}
        </div>
    );
};

export default Square;
