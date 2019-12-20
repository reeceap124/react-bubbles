import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/bubbles'}>Bubbles Page</Link>
        </div>
    )
}