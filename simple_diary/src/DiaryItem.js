const DiaryItem = ({author, content, emotion, created_date}) => {
    return (
        <li className="DiaryItem">
            <div className="head">
                <div className="info">
                    <span>작성자 : {author}</span>
                    <span>감정 점수 : {emotion}</span>
                </div>
                <p className="date">{new Date(created_date).toLocaleString()}</p>
            </div>
            <p className="content">
                {content}
            </p>
        </li>
    )
     
};

export default DiaryItem;