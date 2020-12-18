import React from 'react';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
    <div>
    <ul>
        <Link className = 'link' to = "/" > Home</Link>
    </ul>
    </div>
    );
}
