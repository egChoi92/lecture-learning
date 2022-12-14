import { useParams } from "react-router-dom";

const Edit = () => {

  const {id} = useParams()


  return (
    <div className="">
      <h2>Edit</h2>
      <p>{id}번째 일기 수정 페이지</p>
    </div>
  );
};

export default Edit;
