import React from 'react'
import styled from 'styled-components';

const SendMessageForm = () => {
  return (
    <div>
      <form>
        <label>
          <textarea/>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}

export default SendMessageForm;


export const Container = styled.div`
  border: 1px solid black;
  margin-left: 20px;
  width: 75%;
`