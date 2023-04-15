import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import BtnComm from "../components/BtnComm";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter(
          (item) => firstDay <= item.date && item.date <= lastDay
        )
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
  return (
    <div>
      <Header
        headText={headText}
        leftChild={<BtnComm text={"<"} onClick={decreaseMonth} />}
        rightChild={<BtnComm text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
