import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate ();
    const handleButtonClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className='home-container'>
            <h1>Supercharge your next focus session</h1>
            <button onClick={handleButtonClick}>🧠Start focusing</button>
        </div>
    );
};

export default HomePage;