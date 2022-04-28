import React from 'react';
import './style.css'

function Gallery() {
    return(
        <div className='galeria'>
            <div className='galeria-list-top'>
                <div className="galeria-row row"></div>
                <div className='galeria-row2 row'></div>
                <div className='galeria-row3 row'></div>
                <div className='galeria-row4 row'></div>
            </div>
            <div className='galeria-list-bottom'>
                <div className='galeria-row5 row'></div>
                <div className='galeria-row6 row'></div>
                <div className='galeria-row7 row'></div>
                <div className='galeria-row8 row'></div>   
            </div>
        </div>
    )
}
export default Gallery