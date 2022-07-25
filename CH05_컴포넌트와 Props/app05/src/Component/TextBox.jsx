import React from 'react'

export default function TextBox() {

  let info = {
    color: 'white',
    backgroundColor: 'gray',
    border: '1px solid',
    display: 'flex',
    height: '200px'

  }
  let textbox = {
    color: 'black',
    backgroundColor: 'gray',
    border: '1px solid',
    display: 'flex',
    height: '150px',
    fontSize: '26px',
    borderRadius: '15px',
    textAlign: 'left',
    padding: '20px',



  }
  let textArea = {
    marginLeft: '200px',
    justifyAlign: 'center'

  }

  return (
    <div className='textbox'>

      <div style={textArea}>
        <p style={textbox}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In, ea necessitatibus ipsa eveniet unde tempora ratione cupiditate perspiciatis eum alias,
          labore ad quos consequatur quas voluptates voluptate similique. Natus, similique?
        </p>
        
      </div>
      

    </div>
  )
}
