import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({id, content, emotion, date}) => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`/diary/${id}`);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);        
    }

    const stringDate = new Date(parseInt(date)).toLocaleDateString();
    return (
        <div className="DiaryItem">
            <div className={["emotion", `emotion--${emotion}`].join(" ")} onClick={goDetail}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png` } />
            </div>
            <div className="information" onClick={goDetail}>
                <sub className="date">{stringDate}</sub>
                <p className="preview">{content.slice(0, 25)}</p>
            </div>
            <div className="button">
                <MyButton text={'수정하기'} onClick={goEdit}/>
            </div>
        </div>
    )
}

export default React.memo(DiaryItem);