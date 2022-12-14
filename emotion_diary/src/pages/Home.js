import { useEffect, useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [currentDate, setCurrnetDate] = useState(new Date());
    const headerText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
            ).getTime();
    
            const lastDay = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                0
            ).getTime();
            
            setData(diaryList.filter((item) => firstDay <= item.date && item.date <= lastDay))
        }
    }, [diaryList, currentDate]);

    useEffect(() => {
        console.log(data);
    }, [data])

    const increaseMonth = () => {
        console.log('currentDate: ', currentDate);
        setCurrnetDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()),
        
        );
    };

    const decreaseMonth = () => {
        setCurrnetDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())
        )
    }

    return (
        <div className="">
        <MyHeader
            leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
            headerText={headerText}
            rightChild={<MyButton text={">"} onClick={increaseMonth} />}
        />
        <DiaryList diaryList={data}/> 
        </div>
    );
};

export default Home;
