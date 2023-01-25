import React from 'react'
import styled from 'styled-components'

const DUMMY_DATA = [
  {
    senderId: 'mitchel',
    text: 'Hey, how is it going?'
  },

  {
    senderId: 'tobi',
    text: 'Good, how about you?'
  },
  
  {
    senderId: 'mitchel',
    text: 'Good to hear! I am great as well'
  }
]

const MessageList = () => {
  return (
    <Container>
      {/* <h1>MessageList</h1> */}
      {DUMMY_DATA.map((message, index) => {
        return(
          <div key={index} className='message'>
          <div className='message-username'>{message.senderId}</div>  
          <div className='message-text'>{message.text}</div>
          </div>
        )
      })}
    </Container>
  )
}

export default MessageList


export const Container = styled.div` 
 border: 1px solid black;
  width: 75%;
  height: 800px;
  margin-left: 1%;

  .message {
    margin-left: 10px;
  }

  .message-text {
    padding: 5px;
    width: 15%;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #58b0eb;
    color: #ffffff;
  }
`;