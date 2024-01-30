import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminBase from './Base';
import GiftAdmin from './GiftAdmin';
import MessageAdmin from './MessageAdmin';

function App() {
    return (
        <React.Fragment>
            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            ビンゴ管理画面
                        </h1>
                        <Router>
                            <div>
                                <Link to="/numbers" className="mx-2 text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-gray-800">番号管理</Link>
                                <Link to="/giftadmin" className="mx-2 text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-gray-800">景品管理</Link>
                                <Link to="/messageadmin" className="mx-2 text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-gray-800">メッセージ管理</Link>
                            </div>
                            <main>
                                <div className="">
                                    <Routes>
                                        <Route path="/numbers" element={<AdminBase />} />
                                        <Route path="/giftadmin" element={<GiftAdmin />} />
                                        <Route path="/messageadmin" element={<MessageAdmin />} />
                                    </Routes>
                                </div>
                            </main>
                        </Router>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default App;