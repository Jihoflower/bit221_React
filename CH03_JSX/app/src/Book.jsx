import React from 'react';



export const Book = (props) => {
  let info = {
    color: 'white',
    backgroundColor: 'gray',
    border: '1px solid',
    display: 'flex'
  }
  let img = {
    width: '100px',
    height: '100px',
    borderRadius: '100px',

  }

  const element = [
    <p>에스파는 나야 둘이 될 수는 없어</p>
  ]


  return (
    <div style={info}> 
      <img style={img} src={"./clothes2.png"} />
      <div>
        <h2>이 책의 이름은 {props.title} 입니다</h2>
        <h3>이 책의 이름은 {props.name} 총 {props.page} 페이지 입니다</h3>
        <p>{element}</p>
      </div>
    </div>
  )
}

export default Book;
