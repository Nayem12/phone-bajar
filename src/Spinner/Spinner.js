import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <div id="loader" className="loading">
                <span className="loader"></span>
            </div>
        </div>
    );
};

export default Spinner;