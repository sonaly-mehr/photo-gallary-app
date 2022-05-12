import { Switch } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { BsSearch } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { ImageContext } from '../../App';
import './Header.css';


const Header = () => {
    const { darkMode, setDarkMode } = useContext(ImageContext);
    const { gallery, setGallery } = useContext(ImageContext);

    const searchImage = (key) => {
        console.log("Button clicked")
        const url = `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=2vBH08MJjQUHzoY3Xd3vn_1wrjkLoDvAhiql4r2I_Tk`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGallery(data.results));

    }
    return (
        <div className='header-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="logo">
                            <h2>Image Gallery</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="header-search-input">
                            <BsSearch className='header-search-icon'></BsSearch><input type="text" placeholder='Search images here' onChange={(e) => searchImage(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="menu">
                            <ul>
                                <li><a href="">Explore</a></li>
                                <li><a href="">Collection</a></li>
                                <li><a href="">Community</a></li>
                                <li className='dark-mode'><a href="">Dark Mode</a></li> <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="dark-mode-icon"></Switch>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="hamburger-menu">
                                <GrMenu className='menu-icon'></GrMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;