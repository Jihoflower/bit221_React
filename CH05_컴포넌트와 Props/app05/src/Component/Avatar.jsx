import React from 'react'

export const Avatar = (props) => {
  const styles = {
    avatar: {
      width: 50,
      height: 50,
      borderRadius: '50%'
    }
  }
  return (
    <>
      <img src={props.url} alt='avatar-img' style={styles.avatar}></img>
    </>
  )
}
