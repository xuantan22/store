import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/products/FormWrap'
import LoginFormat from './LoginFormat'

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <LoginFormat/>
      </FormWrap>
    </Container>
  )
}

export default Login