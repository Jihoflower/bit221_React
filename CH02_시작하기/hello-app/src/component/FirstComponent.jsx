import React, { useEffect, useState } from 'react'


export const FirstComponent = () => {

  const [name, setName] = useState("");
  const [valuable, setValuable] = useState(false);
  const [notidata, setNotidata] = useState([])



  const changeValue = () => {
    if (valuable == false) {
      setValuable(true);
      setName("동 to the 그 to the 라미~")
      console.log(name);
    }
    else if (valuable == true) {
      setValuable(false);
      setName("우 to the 영 to the 우!");
      console.log(name);
    }
  }
  const alertdata = () => {
    alert("실행되고있음");
  }

  const contentData = [
    { id: '운영진', content: "안녕하십니까 여러분" },
    { id: '운영진', content: "해당사건에 대해서" },
    { id: '운영진', content: "관련 말씀을 드립니다" },
    { id: '운영진', content: "사실이 아닙니다" }
  ]

  const notiIndex = () => {

  }



  return (
    <div>
      <button onClick={alertdata}>클릭하면 함수실행됨</button><br />
      <button onClick={changeValue}>안녕 우영우</button>
      <div>{name}</div>

    </div>
  )

}
export default FirstComponent;