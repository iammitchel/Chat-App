import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'

const NewRoomForm = () => {
  return (
    <Container>
      <h1>NewRoomForm <AiOutlinePlus /> </h1>
    </Container>
  );
}

export default NewRoomForm

export const Container = styled.div`
  border: 1px solid black;
  width: 20%;
  
`