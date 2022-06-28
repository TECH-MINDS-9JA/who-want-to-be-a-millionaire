import React,{ useContext, useRef } from 'react'
import { StartContainer, Play, Form, Label, Input } from './start.style'
import { Fade, Slide } from 'react-reveal'
import { ContextContext } from '../../context/Context'
function Start() {
  const {  setUser, playSound } = useContext(ContextContext)
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(inputRef.current.value)
    playSound()
  }
  return (
    <StartContainer>
        <Play type='submit' onClick={handleSubmit}>let play now</Play>
      <Form>
        <Label>Please Enter Your Name</Label>
        <Input type='text'
          placeholder='Your Name'
          required
          autoFocus
          ref={inputRef}
        />
        </Form>
        </StartContainer>
  )
}

export default Start