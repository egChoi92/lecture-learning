import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList, onRemove, onEdit}) => {
    return (
        <div className="DiaryList">
            <h1>일기 리스트</h1>
            <p className="notice">{diaryList.length}개의 일기가 있습니다</p>
            <ul>
                {diaryList.map((item, index) => (
                    <DiaryItem key={item.id} {...item} onRemove={onRemove} onEdit={onEdit} />
                ))}
            </ul>
        </div>
    )
};

DiaryList.defaultProps = {
    diaryList: [
        
    ]
}

export default DiaryList