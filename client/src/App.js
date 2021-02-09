import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import './style/app.scss';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <div className="app-container">
                        <Routes />
                    </div>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
