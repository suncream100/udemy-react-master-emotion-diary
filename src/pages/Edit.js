import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>
        이 곳은 일기 수정 QueryString: id={id}, mode={mode}
      </p>
      <button onClick={() => setSearchParams({ who: "user" })}>
        QueryString 변경
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
