import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import './style/app.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="app-container">
                    <Routes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
