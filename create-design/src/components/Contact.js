import React from 'react'
import '../public/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h2>聯繫資訊</h2>
            <div className="contactInformation">
                <ul>
                    <li>創意設計學士班主任</li>
                    <li>戴楠青 副教授</li>
                    <li>電話</li>
                    <li>886-02-27712171 分機 8903</li>
                    <li>電子信箱</li>
                    <li>nctai@ntut.edu.tw</li>
                </ul>
                <ul>
                    <li>設計學院 秘書</li>
                    <li>蔡依純 助教</li>
                    <li>電話</li>
                    <li>886-02-27712171 分機 4562</li>
                    <li>電子信箱</li>
                    <li>yichun@ntut.edu.tw</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
