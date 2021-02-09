import React from 'react'
import exhibition from '../public/images/exhibition.JPG'

const PastExhibitions = () => {
    return (
        <a href="#" target="_blank" className="fadeIn">
            <div className="exhibitionPhoto">
                <img src={exhibition} alt=""/>
            </div>
            <h3>109級上學年期末展覽</h3>
        </a>
    )
}

export default PastExhibitions
