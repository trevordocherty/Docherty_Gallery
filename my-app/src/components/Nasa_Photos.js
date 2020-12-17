
import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from "./NavBar";
const apikey = process.env.REACT_APP_NASA_KEY;

export default function Nasa_Photos() {
    const [photoData, setPhotoData] = useState(null);
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
            setPhotoData(data_photo);
            console.log(data_photo)

        }
    }, []);

    if (!data) return <div />
    if (!photoData) return <div />
    return (
        <>
            <NavBar />
            <div>
                {photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} />)
                    : (
                        <iframe
                            title="space-video" src={photoData.url} width="100" height="200" frameBorder="0" gesture="media" allow="autoplay" allowFullScreen className="photo"
                        />
                    )}
                <div>
                    <h1> {photoData.title} </h1>
                    <p>{photoData.data}</p>
                    <p>{photoData.explanation}</p>
                </div>
                <h2> {data.img_src}</h2>
            </div>
        </>

    )
}


