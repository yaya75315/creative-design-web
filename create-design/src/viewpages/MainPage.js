import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../public/MainPage.css';
import exhibition from '../public/images/exhibition.JPG';
import exh14th01 from '../public/images/14th_first.jpg';
import exh14th02 from '../public/images/14th_second.jpg';
import exh13th01 from '../public/images/13th_first.jpg';
import exh13th02 from '../public/images/13th_second.jpg';
import PastExhibitions from '../components/PastExhibitions'

// import {TweenMax, Power3} from 'gsap'



const MainPage = () => {
    return (
        <main className="mainPage">
            <div className="mainPageTitle">
                <h1>從創設創造創設</h1>
            </div>
            <div className="mainPageArticle">
                <h2 className="fadeIn">從創設認識創設,<br />從創設創造創設</h2>
                {/* <p className="fadeIn">
                    設計的發展是不斷累積而成的，創設也是。隨著設計需求時時改變，創意設計學士班也在不變的設計初心與多變的設計需求下，在堅持中時時求新求變。<br/>
                    <br/>
                    然而不增改變的是培養現今與未來設計產業所需之優秀人才的辦學目標，也因此創設班實為所培養出的學生所定義。<br/>
                    <br/>
                    了解今天的創設最好的方法就是認識今天創設的學生。然而在認識了今天的創設，對於有志於由多元跨域設計跨出邁向設計專業第一步的妳或你，在了解了今日的創設後，更能進一步想像你們又要如何定義明日的創意設計學士班。
                </p> */}
                <p className="fadeIn">
                    設計的發展是不斷累積而成的，創設也是。隨著設計需求時時改變，創意設計學士班也在不變的設計初心與多變的設計需求下，在堅持中時時求新求變。
                </p>
                <p className="fadeIn">
                    然而不增改變的是培養現今與未來設計產業所需之優秀人才的辦學目標，也因此創設班實為所培養出的學生所定義。
                </p>
                <p className="fadeIn">
                    了解今天的創設最好的方法就是認識今天創設的學生。然而在認識了今天的創設，對於有志於由多元跨域設計跨出邁向設計專業第一步的妳或你，在了解了今日的創設後，更能進一步想像你們又要如何定義明日的創意設計學士班。
                </p>
            </div>

            <h2 className="fadeIn">歷屆展覽</h2>
            <div className="mainPageExhibition fadeIn">
                <PastExhibitions exhImg={exh14th01} exhInfo={'108級創設期末展-上學期'} exhLink={'https://www.facebook.com/%E8%82%9D%E6%B0%A3%E9%AC%B1%E7%B5%90-%E8%87%BA%E5%8C%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8-%E5%89%B5%E6%84%8F%E8%A8%AD%E8%A8%88%E5%AD%B8%E5%A3%AB%E7%8F%AD-%E7%AC%AC14%E5%B1%86%E6%9C%9F%E6%9C%AB%E5%B1%95--111327477024317/'} />
                <PastExhibitions exhImg={exh14th02} exhInfo={'108級創設期末展-下學期'} exhLink={'https://www.facebook.com/%E8%82%9D%E6%B0%A3%E9%AC%B1%E7%B5%90-%E8%87%BA%E5%8C%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8-%E5%89%B5%E6%84%8F%E8%A8%AD%E8%A8%88%E5%AD%B8%E5%A3%AB%E7%8F%AD-%E7%AC%AC14%E5%B1%86%E6%9C%9F%E6%9C%AB%E5%B1%95--111327477024317/'} />
                <PastExhibitions exhImg={exh13th01} exhInfo={'107級創設期末展-上學期'} exhLink={'https://www.facebook.com/%E9%AE%91%E4%BC%AF%E4%BD%A0%E8%A6%BA%E5%BE%97%E5%91%A2-%E5%8C%97%E7%A7%91%E5%89%B5%E8%A8%AD13%E5%B1%86%E6%9C%9F%E6%9C%AB%E5%B1%95%E8%A6%BD-576761762777164'} />
                <PastExhibitions exhImg={exh13th02} exhInfo={'107級創設期末展-下學期'} exhLink={'https://www.facebook.com/keepalien.taipeitechCD/'} />

                {/* <PastExhibitions exhImg={exhibition} exhInfo={'109級畢業設計期末展'} />
                <PastExhibitions exhImg={exhibition} exhInfo={'107級畢業設計期末展'} /> */}
            </div>
            <div className="mainPageArticle">
                <h2 className="fadeIn">創意設計學士班</h2>
                {/* <p className="fadeIn">
                    國立臺北科技大學創意設計學士班成立於 2006 年，為設計學院直屬之大一不分系，大二分流至設計學院三系五組的學士班。<br/>
                    <br/>
                    三系五組包含建築系、工業設計系產品設計組、工業設計系家具與室內設計組、互動設計系媒體設計組，與互動設計系視覺傳達設計組。<br/>
                    <br/>
                    創意設計學士班招收高中畢業對設計有興趣的學生，並以培養跨域且專精之設計人才為目的。
                </p> */}
                <p className="fadeIn">國立臺北科技大學創意設計學士班成立於 2006 年，為設計學院直屬之大一不分系，大二分流至設計學院三系五組的學士班。</p>
                <p className="fadeIn">三系五組包含建築系、工業設計系產品設計組、工業設計系家具與室內設計組、互動設計系媒體設計組，與互動設計系視覺傳達設計組。</p>
                <p className="fadeIn">創意設計學士班招收高中畢業對設計有興趣的學生，並以培養跨域且專精之設計人才為目的。</p>
                <a href="https://ent30.jctv.ntut.edu.tw/applyRuleReport" className="externalLinks fadeIn" >招生簡章</a>
                <Link to="/KnowUsPage" className="nextPage fadeIn">認識創設</Link>
            </div>
        </main>
    )
}

export default MainPage
