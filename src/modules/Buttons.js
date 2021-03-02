import React from "react";

const Buttons = () => {
  const checkAnswer = (e) => {
    const check = e.target.value;
    console.log(e.target.value);
    if (check === "스페이스 엑스") {
      alert("정답입니다. 👍🏽");
    } else {
      alert("다시 선택하세요.😅");
    }
  };

  const names = ["스페이스 엑스", "삼성전자", "카카오", "네이버"];
  const nameList = names.map((name, index) => (
    <button key={index} value={name} onClick={checkAnswer}>
      {name}
    </button>
  ));

  return <>{nameList}</>;
};

export default Buttons;
