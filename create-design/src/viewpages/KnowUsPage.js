import React from 'react'
import '../public/SidePage.css'
import exhibition from '../public/images/exhibition.JPG';
import { Link } from 'react-router-dom';
import '../public/common.css'

const KnowUsPage = () => {
    console.log("Know Us");
    return (
        <div className="sidePageContent">
            <div className="mainPageArticle">
                <h2>我們的視野</h2>
                <p>科技日新月異，生活型態隨之時時改變，所支應之設計也隨時變化。臺北科技大學工業設計系與建築系創建於日治時期，其後逐步建立系與所，並於千禧年初成立設計學院，之後於 2009 年與 2013 年分別成立互動所與互動設計系，而成一完整的設計學院。<br />
                    <br />
                互動系的成立讓臺北科技大學設計學院能將傳統三大設計領域的建築、工設，與平面設計能因應數位科技的發展，以人機互動，以人為本的設計思維下發展出連結不同尺度的跨域設計，並讓我們的學生能閱讀出以指數速度發展的數位運算與通訊科技下所衍生出的新的人、社群，甚或人與環境的新的行為與社群模式，與這些新的模式所需要的新設計。
                <br />
                    <br />
                讓學生能在自己喜歡的尺度中，如大尺度的都市與建築、中尺度的室內空間、小尺度的產品，與無尺度的數位介面，發揮設計的才能。</p>

                <img src={exhibition} alt="" />

                <h2>讓設計專業學得更好</h2>
                <p>智慧空間、參數化設計、互動展場、物聯網、實體互動介面、擴增實境、虛實整合互動遊戲等皆是現今設計產業的新興跨域應用。<br />
                    <br />
                創設班一年級的跨域學習貴精不貴廣，然而所學之設計思考、材料塑形、二維圖說、三維建模、數位製造、機電整合，程式開發等能力皆能在分流後的三系五組的專業領域中讓專業學習能更跨域，也能更專業。</p>

                <img src={exhibition} alt="" />
                <p>而創設班最大的特色也在於讓同學透過多元的設計學習，讓自己在設計中找尋最喜歡的設計專業。
                同學不需立刻決定分流的選項，而能在多方探索後於大一下期中後做最後的分流決定，並在完成所選之三系五組的三年學習後取得建築、工業設計，或互動設計系的畢業證書。</p>
                <img src={exhibition} alt="" />


                <a href="https://ixd.ntut.edu.tw/" className="externalLinks">互動設計系系網</a>
                <a href="https://wwwid.ntut.edu.tw/" className="externalLinks">工業設計系系網</a>
                <a href="https://arch1.ntut.edu.tw/" className="externalLinks">建築系系網</a>


                <Link to="/CoursePage" className="nextPage">課程介紹</Link>
            </div>
        </div>
    )
}

export default KnowUsPage
