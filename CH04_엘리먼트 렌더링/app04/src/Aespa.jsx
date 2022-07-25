import React from 'react'

export default function Aespa() {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return (
    <div>
      <p>시계를 만들어 볼게용~</p>
      <span>{now + "" + time}</span>
    </div>
  )
}

