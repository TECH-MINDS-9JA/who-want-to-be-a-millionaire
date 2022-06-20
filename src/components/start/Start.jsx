import React from 'react'
import { StartContainer, Play,Form, Label, Input } from './start.style'
function Start() {
  const handlePlay = () => {
    console.log('yeah click recorded')
  }
  return (
    <StartContainer>
      <Play onClick={handlePlay}>let play now</Play>
      <Form>
        <Label>Please Enter Your Name</Label>
        <Input type='text' placeholder='Your Name'/>
      </Form>
    </StartContainer>
  )
}

export default Start