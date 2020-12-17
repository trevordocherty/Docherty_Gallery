
import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from "./NavBar";
const apikey = process.env.REACT_APP_NASA_KEY;

export default function Nasa_Photos() {
    const [data_nasa, setdata_nasa] = useState(null);
    const [data, setData] = useState(null);



    useEffect(() => {
        fetchmars();
        async function fetchmars() {
            const rest = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apikey}`);
            const data_photos = await rest.json();
            setData(data_photos);
            console.log(data_photos)
        }
    }, []);

    useEffect(() => {
        fetchphoto();

        async function fetchphoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`);
            const data_photo = await res.json();
            setdata_nasa(data_photo);
            console.log(data_photo)

        }
    }, []);

    if (!data) return <div />
    if (!data_nasa) return <div />
    return (
        <>
        <NavBar />
        <div>
            {data_nasa.media_type === "image" ? (
                 <img src={data_nasa.url} alt={data_nasa.title} />) : (
                     <iframe
                        title="space-video" 
                        src={data_nasa.url} 
                        width="565" 
                        height="400" 
                        frameBorder="0" 
                        gesture="media" a
                        llow="autoplay" 
                        />
                    )}
                <div>
                    <h1> {data_nasa.title} </h1>
                    <p>{data_nasa.data}</p>
                    <p>{data_nasa.explanation}</p>
                </div>
                <h2> {data.img_src}</h2>
            </div>
        </>

    )
}


