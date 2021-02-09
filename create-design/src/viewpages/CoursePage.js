import React from 'react'
import exhibition from '../public/images/exhibition.JPG';
import coursemap from '../public/images/coursemap.png'
import { Link } from 'react-router-dom';
import '../public/SidePage.css'

const CoursePage = () => {
    return (
        <div className="sidePageContent">
            <div className="mainPageArticle">
                <h2 className="fadeIn">學得更多的大一</h2>
                <p className="fadeIn">今時今日，設計的界線在數位原生代的時代不再清晰可辨。創意設計學士班一年級的課程主旨便在鼓勵同學探索心之所屬的專精設計領域的同時，也讓同學習得未來專精領域中跨域設計的專業能力。
<br />
                    <br />
在得天獨厚的小班教學下，創設班同學在專屬的設計工作室逐步養成能在任何領域發光發熱的設計人才。基礎課程架構以基本設計的主軸展開，設計課以小組方式上課，在被所熱愛的設計填滿的大學生活中，透過不同的設計題，一次又一次的評圖與班展，了解如何作設計與說設計，呈現各種學到的，與體會出的設計能力。</p>

                <img src={exhibition} alt="" className="fadeIn"/>

                <p className="fadeIn">創設大一課程以設計課為核心串連不同的實作技術課。設計圖學循序教授設計的圖像語言，讓同學能以手繪、電繪，與數位製造的能力來描述設計與實現設計。數位設計原理、程式設計入門，與多媒體創意設計則逐步培養學生程式語言能力，與以程式製作互動裝置與開發行動應用程式的能力，讓實體設計能透過程式控制的機電整合設計，與智慧手機應用程式的連結而將設計的影響範圍無限延伸。
<br />
                    <br />
在養成新世代以程式語言做設計的同時，試作技術與設計實作兩門課程則承襲北科設計學院的傳統，以扎實的木工與精工訓練讓同學在數位創新與手作傳統間平行並進，更為二年級分流後的專業領域奠定穩固基礎。</p>
                <img src={exhibition} alt="" className="fadeIn"/>
                <div className="courseMap fadeIn">
                    <h1>課程地圖</h1>
                    <img src={coursemap} alt="" />
                </div>
                <Link to="/TeacherPage" className="nextPage fadeIn">師資介紹</Link>
            </div>
        </div>
    )
}

export default CoursePage
