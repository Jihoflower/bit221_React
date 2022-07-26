import React from 'react'
import { Comment } from './Comment'

export const CommentList = () => {

  const list = [{
    name: 'winter',
    comment: '안녕하세요 윈터입니다',
    avatarUrl: './public/logo192.png'
  },
  {
    name: 'jiho',
    comment: '안녕하세요 지호입니다',
    avatarUrl: './public/logo192.png'
  },
  {
    name: 'yena',
    comment: '안녕하세요 예나입니다',
    avatarUrl: './public/logo192.png'
  }

  ]

  return (
    <>
      {list.map((data, idx) => {
        return (
          <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl} />
        )
      })}
    </>
  )
}
