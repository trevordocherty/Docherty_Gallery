import React from 'react';
import {Link} from 'react-router-dom';
export default function Home_Page () {
    return (
        <div>
         <Link to = "/nasaphototoday" className = "title"> The Daily Planet </Link>
         <Link to = "/marsroverphotos" className= 'title_2'> Mars Rover</Link>
        </div>
    )
}