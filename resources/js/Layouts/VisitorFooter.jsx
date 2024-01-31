import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLine, faYoutube } from '@fortawesome/free-brands-svg-icons';

const VisitorFooter = () => {
    return (
        <footer className="bg-gray-300 p-4 border border-gray-400">
            <div className="flex justify-end items-center">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                    ページ上部へ
                </button>
            </div>
            <div className="flex items-center justify-center my-2">
                <a href="#" className='border-b border-black'>プライバシーポリシー</a>
            </div>
            <div className="flex justify-center items-center pt-2">
                <a href="#">
                    <div className="rounded-full mx-2 bg-blue-500 text-white w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </a>
                <a href="#">
                    <div className="rounded-full mx-2 bg-blue-500 text-white w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faLine} />
                    </div>
                </a>
                <a href="#">
                    <div className="rounded-full mx-2 bg-blue-500 text-white w-10 h-10 flex justify-center items-center">
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default VisitorFooter;
