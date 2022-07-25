import React from 'react'

export const SecondComponent = () => {

  const title = "100분 토론";
  let flag = true;



  return (
    <div>
      <h1>변수사용</h1>
      <p>이어서 {title}</p>
      <h1>삼항연산자</h1>
      {flag ? <p>안녕하세요</p> : <p>누구세요?</p>}
      <h1>camelCase</h1>
      <p className='app5'>camel case</p>



    </div>


  )
}

export default SecondComponent;
