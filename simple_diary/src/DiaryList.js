import DiaryItem from "./DiaryItem";

const DiaryList = ({list}) => {
    console.log(list);

    return (
        <div className="DiaryList">
            <h1>일기 리스트</h1>
            <p>{list.length}개의 일기가 있습니다</p>
            <ul>
                {list.map((item, index) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    )
};

DiaryList.defaultProps = {
    list: [
        
    ]
}

export default DiaryList