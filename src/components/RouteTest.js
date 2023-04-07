import { Link } from "react-router-dom";

// react router는 a태그를 사용하지 않고 Link와 to속성을 사용해 페이지 링크를 만듬
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/edit"}>Edit</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
    </>
  );
};

export default RouteTest;
