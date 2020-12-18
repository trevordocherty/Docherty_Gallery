import React from 'react';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
    <div>
    <ul>
        <Link className = 'links' to = "/" > Home</Link>
    </ul>
    </div>
    );
}
