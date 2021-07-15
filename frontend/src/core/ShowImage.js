import React from 'react';
import { API } from '../config';
import './styles/ShowImage.css'

const ShowImage = ({item, url}) => {
    return (
        <div className="product-img">
            <img
                src={`${API}/${url}/photo/${item._id}`}
                alt={item.name}
                className="mb-3 img-cont"
                style={{maxHeight: "600px", maxWidth:"500px"}}
            />
        </div>
    )
}


export default ShowImage;