import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ImageDetail.css'
import { AiOutlineInstagram, AiOutlineLike, AiOutlineInfoCircle } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsShare } from "react-icons/bs";

const ImageDetail = ({ id }) => {
    const [imgDetail, setImgDetail] = useState({});
    const { urls, user, links, likes, downloads } = imgDetail;

    useEffect(() => {
        const url = `https://api.unsplash.com/photos/${id}?client_id=2vBH08MJjQUHzoY3Xd3vn_1wrjkLoDvAhiql4r2I_Tk`;
        fetch(url)
            .then(res => res.json())
            .then(data => setImgDetail(data))

    }, [])

    return (
        <div className='img-detail-section'>
            <div className='popup-img-detail'>
                <img src={urls && urls.raw} alt="" />

                <div className="img-share-download">
                    <div className="share-info">
                        <button><BsShare style={{ marginRight: '5px' }}></BsShare> Share</button>
                        <button><AiOutlineInfoCircle style={{ marginRight: '5px' }}></AiOutlineInfoCircle> Info</button>
                    </div>
                    <div className="download-img">
                        <a download={links && links.download} href={links && links.download}> Download</a>
                    </div>
                </div>

                <div className="popup-image-content">
                    <div className="user-info-likes">
                        <div className="popup-user-info">
                            <img src={user && user.profile_image && user.profile_image.medium} alt="" />
                            <div className='popup-user-name'>
                                <h4>{user && user.first_name} {user && user.last_name}</h4>
                                <span>@{user && user.username}</span>
                            </div>
                        </div>

                        <div className='user-social-media'>
                            <AiOutlineInstagram className='social-icon'></AiOutlineInstagram><span>/{user && user.social && user.instagram_username}</span>
                        </div>
                        <div className='user-social-media'>
                            <FiTwitter className='social-icon'></FiTwitter><span>/{user && user.social && user.social.twitter_username}</span>
                        </div>
                    </div>

                    <div className="likes-downloads">
                        <div>
                            <h6>{downloads} downloads</h6>
                        </div>
                        <div>
                            <h6><AiOutlineLike className='like-btn'></AiOutlineLike> {likes}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ImageDetail;