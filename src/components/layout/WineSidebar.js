import React from 'react';
import {Link } from "react-router-dom";

function WineSidebar(props) {
    return (
        <div>
            <Link to="/wine/add" className="btn btn-success btn-block">
                <i className="fas fa-plus"/> New
            </Link>
        </div>
    );
}

export default WineSidebar;