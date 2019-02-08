import './ImageList.css';
import React from 'react';
import ImageCard from './imageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{images}</div>

  }

export default ImageList;


// YOU CAN EITHER WRITE IT LIKE THIS OR LIKE IT IS ABOVE, IF YOU DON'T WANT TO KEEP WRITING 'IMAGES' BEFORE EACH ITEM
// const images = props.images.map(({ description, id, urls}) => 
            // !!!OOORRR!!!
// const images = props.images.map((image) => {
//     return <img key={image.id} alt={image.description} src = { image.urls.regular }/>
// })