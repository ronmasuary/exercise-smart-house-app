import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CirclePicker } from 'react-color'

export default function AddRoom({ addNewRoom }) {


// סטיט חדש של חדר. מכיל את השדות: שם, סוג, צבע (אשר כל אלה הם מחרוזת ריקה) ומערך מוצרים שגם הוא כרגע ריק
    const [room, setRoom] = useState({
        name: '',
        type: '',
        color: '',
        products: []
    })

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה אשר נקראת בכל שינוי שיש באינפוט שמכיל את שם החדר. הפונקציה מקבלת אלמנט, מציבה אותו במשתנה 
// מקומי על מנת לא לחכות לרינדור ומעדכנת את הסטייט של החדר.
    const changeName = (e) => {
        let n = e.target.value;
        setRoom({
            name: n,
            type: room.type,
            color: room.color,
            products: room.products
        })
    }

// פונקציה אשר נקראת כאשר יש שינוי בסלקט שמכיל את סוגי החדרים. הפונקציה מקבלת אלמנט, מציבה אותו במשתנה 
// מקומי על מנת לא לחכות לרינדור ומעדכנת את הסטטיט של החדר בהתאם
    const changeType = (e) => {
        let t = e.target.value;
        setRoom({
            name: room.name,
            type: t,
            color: room.color,
            products: room.products
        })
    }

// פונקציה אשר נקראת כאשר יש שינוי בבחירת המוצרים בשטות הזאת שהבאתי מהאינטרנט.
// הפונקציה מקבלת אלמנט צבע ומעדכנת את הסטייט בהתאם. חשוב לבדוק על ה-הקס הזה
    const changeColor = (color) => {
        debugger;
        setRoom({
            name: room.name,
            type: room.type,
            color: (color.hex),
            products: room.products
        })
    }

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה אשר נקראת כאשר יש אירוע לחיצה על כפתור הוספת חדר.
// הפונקציה בודקת האם השם שהוכנס הוא מחרוזת ריקה או הסוג שנבחר הוא מחרוזת ריקה, אם כן, תקפיץ שגיאה
// ותצא מהפונקציה. אם לא, תקרא לפונקציה להוספת חדר חדש שבהגיעה כפורפס מ-אפ ותשלח אלייה את אובייקט החדר 
// שיצרתי בסטייט.
    const addRoom = () => {
        if (room.name === '' || room.type === '') {
            alert('Error!')
            return;
        }
        addNewRoom(room);
    }


    return (
        <div>
            <form>

                <label>
                    insert the name:
                </label><br />

                <input type='text' value={room.name} onChange={changeName}></input>

                <br />



                <label>
                    select the type:
                </label><br />

                <select value={room.type} onChange={changeType}>
                    <option selected value=''>choose type</option>
                    <option value='bedroom'>bedroom</option>
                    <option value='bathroom/toilet'>bathroom/toilet</option>
                    <option value='livingroom'>livingroom</option>

                </select>



                <br /><br />
                <div style={{marginLeft:'430px'}}>
                <CirclePicker onChange={changeColor}/>
                </div>

                <br /><br />

                <Link to='/' onClick={room => addRoom(room)}><button>add</button></Link>




            </form>

        </div>
    );
}

