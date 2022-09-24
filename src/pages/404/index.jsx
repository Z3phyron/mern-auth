import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const index = () => {
    return (
        <Container>
            <div>
                 <h1>4 0 4</h1>
            <p>Error Page Not Found!!!</p>
            <Link to='/'>Go Back</Link>
            </div>
           
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 150px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
  a {
    font-size: 10px;
    padding: 10px 20px;
    background: #000;
    border-radius: 6px;
    color: #fff;
  }
`;

export default index
