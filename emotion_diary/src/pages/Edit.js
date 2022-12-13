import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  const navigate = useNavigate();

  return (
    <div className="">
      <h2>Edit</h2>
      <p>일기 수정 페이지</p>
      <button onClick={() => setSearchParams({ who: "egChoi" })}>
        Query String Update
      </button>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Edit;
