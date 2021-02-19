import React from 'react'
import TeacherCard from '../components/TeacherCard'

const TeacherPage = () => {
    return (
        <div className="teacherPage">
            <TeacherCard />
            <a href="https://ixd.ntut.edu.tw/p/403-1089-1713.php?Lang=zh-tw" target="_blank" className="externalLinks fadeIn">互動設計系師資</a>
            <a href="https://arch1.ntut.edu.tw/p/412-1086-14927.php?Lang=zh-tw" target="_blank" className="externalLinks fadeIn">建築系師資</a>
            <a href="https://wwwid.ntut.edu.tw/p/412-1087-2048.php?Lang=zh-tw" target="_blank" className="externalLinks fadeIn">工業設計系師資</a>
        </div>
    )
}

export default TeacherPage
