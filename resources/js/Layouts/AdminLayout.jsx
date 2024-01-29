import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Admin({ children }) {
    return (
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
                            <Link to="/numbers" className="mx-2 text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-gray-800">お知らせ管理</Link>
                        </div>
                    </Router>
                </div>
            </header>
            <main>
                <div className="py-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}