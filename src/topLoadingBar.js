import React from 'react';
import './TopLoadingBar.css';

const TopLoadingBar = ({ progress }) => {
    return (
        <div className="top-loading-bar-container">
            <div className="top-loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default TopLoadingBar;
