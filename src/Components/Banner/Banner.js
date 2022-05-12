import React from 'react';
import banner from '../../images/banner-img.jpg'
import { BsSearch } from "react-icons/bs";
import './Banner.css';
import { useContext } from 'react';
import { ImageContext } from '../../App';

const Banner = () => {
    const { gallery, setGallery } = useContext(ImageContext);
    // const [suggetions, setSuggetions] = useState([]);

    const searchImage = (key) => {
        // e.preventDefault();
        console.log("Button clicked")
        const url = `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=2vBH08MJjQUHzoY3Xd3vn_1wrjkLoDvAhiql4r2I_Tk`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGallery(data.results));

    }
    return (
        <div className='banner-section'>
            <img src={banner} alt="" />
            <div className="banner-content">
                <h4>Download High Qality Images By Creator</h4>
                <span>Over 24 million+ stock images by our talanted community</span> <br />
                <div className="search-bar">
                    <BsSearch className='banner-search-icon'></BsSearch>
                    <input type="text" placeholder='Search hight resolution images, categories, wallpapers' onChange={(e) => searchImage(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Banner;