const BtnComm = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["btn_comm", `btn_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

BtnComm.defaultProps = {
  type: "default",
};

export default BtnComm;
