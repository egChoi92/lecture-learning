import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DiaryItem from "./DiaryItem"
import MyButton from "./MyButton"

const sortOptionList = [
    {value: 'latest', name: '최신 순'},
    {value: 'oldest', name: '오래된 순'}
]

const filterOptionList = [
    {value: 'all', name: '전부'},
    {value: 'good', name: '좋은 감정'},
    {value: 'bad', name: '안 좋은 감정'},
]

const ControlMenu = ({value, onChange, optionList}) => {
    return (
        <select className="ControlMenu" value={value} onChange={(event) => onChange(event.target.value)}>
            {optionList.map((option, index) => 
                <option key={index} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');

    const getProcessedDiaryList = () => {
        const filterCallback = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3
            } else {
                return parseInt(item.emotion) > 3
            }
        }
        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filterList = filter === 'all' ? copyList : copyList.filter((item) => filterCallback(item))
        const sortedList = filterList.sort(compare);
        return sortedList;
    }

    return (
        <div className="DiaryList">
            <div className="menu">
                <div className="left-col">
                    <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
                    <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList}/>
                </div>
                <div className="right-col">
                    <MyButton type={'positive'} text={'새 일기 쓰기'} onClick={() => navigate('/new')}/>
                </div>
            </div>
            {getProcessedDiaryList().map((item) => 
                <DiaryItem 
                    id={item.id} 
                    content={item.content} 
                    emotion={item.emotion}
                    date={item.date}
                />
            )}
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;