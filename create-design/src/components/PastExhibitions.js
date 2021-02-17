import React from 'react'
import exhibition from '../public/images/exhibition.JPG'

const PastExhibitions = ({ exhImg, exhInfo, exhLink }) => {
    return (
        <a href={exhLink} target="_blank" className="fadeIn">
            <div className="exhibitionPhoto">
                <img src={exhImg} alt="" />
            </div>
            <h3>{exhInfo}</h3>
        </a>
    )
}

export default PastExhibitions
