import React from 'react';
import {Link} from 'react-router-dom';
export default function Home_Page () {
    return (
        <div>
         <Link to = "/nasaphototoday" className = "title"> The Daily Planet </Link>
         <Link to = "/marsroverphotos" className= 'title_2'> Mars Rover</Link>
         <Link to = "./earthimages" className = 'title_3 ' >Space Station </Link>
         <Link to = "./image_gallery" className = 'title_4'> Image Gallery Nasa Data_Base </Link>
        </div>
    
    )
}