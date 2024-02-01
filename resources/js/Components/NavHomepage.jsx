import React from 'react';

// aタグのhrefと文章を変更すれば使いまわせる

const NavHomepage = () => {
    return (
        <div>
            <h2 className="cursor-pointer">
                <a href="https://nodaridaisai.com/2023/" className="text-gray-500">
                    2024年理大祭
                </a>
            </h2>
        </div>
    );
};

export default NavHomepage;
