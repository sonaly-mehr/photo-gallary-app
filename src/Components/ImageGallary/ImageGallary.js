import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ImageContext } from '../../App';
import GalleryList from './GalleryList';

const ImageGallary = () => {
    const { gallery, setGallery } = useContext(ImageContext);

    useEffect(() => {
        const url = `https://api.unsplash.com/photos?page=1&client_id=2vBH08MJjQUHzoY3Xd3vn_1wrjkLoDvAhiql4r2I_Tk`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGallery(data))

    }, [])
    return (
        <div className='image-gallery-section'>
            {
                gallery.map(item => <GalleryList item={item}></GalleryList>)
            }
        </div>
    );
};

export default ImageGallary;