import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div className="">
      <h2>Diary</h2>
      <p>{id}번째 일기 상세 페이지</p>
    </div>
  );
};

export default Diary;
