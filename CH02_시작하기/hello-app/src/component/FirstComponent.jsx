import React, { useEffect, useState } from 'react'


export const FirstComponent = () => {

  const [name, setName] = useState("");
  const [valuable, setValuable] = useState("false");


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








  return (
    <div>
      <button onClick={changeValue}>안녕 우영우</button>
      <div>{name}</div>
      <div>왜 안나와 나옴?
      </div>
    </div>
  )

}
export default FirstComponent;