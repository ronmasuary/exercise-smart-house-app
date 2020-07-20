import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ rooms, handleRoomClicked }) {

// ייבאתי את מערך החדרים ואת הפונקציה שמטפלת באירוע קליק על חדר
// ביצעתי  "מאפ " על מערך החדרים כאשר כל חדר הוא כפתור, רקע הכפתור הוא צבע החדר על פי 
//בחירת המשתמש. על כל אירוע לחיצה על החדר הפונקציה שמטפלת בלחיצה על החדר שנמצאת ב-אפ
    return (
        <div>
            {rooms.map(r => {
                return (
                    <div>
                        <Link to='/room' onClick={() => handleRoomClicked(r)}><button style={{ backgroundColor: r.color }}>{r.name}</button></Link>
                    </div>
                )
            })}


            <Link to='/addroom' ><button>+</button></Link>
        </div>
    )
}
