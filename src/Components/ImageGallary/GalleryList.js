import React from 'react';
import { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import ImageDetail from '../ImageDetail/ImageDetail';
import ImagePopUp from '../ImagePopUp/ImagePopUp';
import './ImageGallary.css';

const GalleryList = (props) => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const { id, urls, likes, user } = props.item;

    return (
        <>
            <div className="single-img-gallery" onClick={() => setOpenPopUp(true)}>
                <img src={urls.thumb} alt="" />
                <div className="img-gallery-content">
                    <div className="user-info">
                        <div className="user-info-wrap">
                            <img src={user.profile_image.small} alt="" />
                            <div className="user-name">
                                <h6>{user.first_name} {user.last_name}</h6>
                                <span>@{user.username}</span>
                            </div>
                        </div>
                    </div>
                    <div className="likes">
                        <AiOutlineLike className='like-icon'></AiOutlineLike> <p>{likes}</p>
                    </div>
                </div>
            </div>
            
            <ImagePopUp
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}>
                <ImageDetail id={id} />
            </ImagePopUp>
        </>
    );
};

export default GalleryList;