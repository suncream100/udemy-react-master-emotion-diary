import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>이 곳은 일기 상세 params: {id}</p>
    </div>
  );
};

export default Diary;
