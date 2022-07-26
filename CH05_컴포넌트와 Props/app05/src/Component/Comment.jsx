import React from 'react'
import { Avatar } from './Avatar'

export const Comment = (props) => {
  return (
    <>
      <div className="comment">
        <div className="user-info container">
          {/*<img src="/CH03_JSX/ch03-app/public/images/simple/908.jpg" alt="aaa" className="avatar" />*/}
          <Avatar url={props.avatarUrl} />
          <div className="user-info-name container">
            {props.name}
          </div>
        </div>

        <div className="comment-txt container">
          <p>
            {props.comment}
          </p>
          <div className="conmment-date">

          </div>
        </div>
      </div>
    </>
  )
}


