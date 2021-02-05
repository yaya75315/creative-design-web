import React from 'react'
import '../public/TeacherPage.css'
import taiPhoto from '../public/images/tai.jpg';

const TeacherCard = () => {
    return (
        <div className="teacherCard">
            <img src={taiPhoto} alt=""className="teacherPhoto"/>
            <div className="teacherInformation">
                <span className="teacherName">戴楠青</span>
                <span className="teacherTitle">副教授</span>
                <h4 className="teacherDegree">美國華盛頓大學建成環境博士</h4>
                <h4 className="teacherEmail">nctai@ntut.edu.tw</h4>
            </div>
        </div>
    )
}

export default TeacherCard
