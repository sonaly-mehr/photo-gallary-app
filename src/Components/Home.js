import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import ImageGallary from './ImageGallary/ImageGallary';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ImageGallary></ImageGallary>
        </div>
    );
};

export default Home;