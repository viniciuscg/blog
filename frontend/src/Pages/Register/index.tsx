import React, { useState } from 'react'
import './style'
import { Card, CardContent, InputLabel, RegisterText, Wrapper } from './style'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { UserServices } from '../../Services/User/UserServices';
import { CircularProgress } from '@mui/material';

function Register() {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [bio, setBio] = useState('')
  const [msgErrorRegister, setMsgErrorRegister] = useState('')
  const [req, setReq] = useState(false)
  const navigate = useNavigate();

  function maskPassword() {
    setShowPassword(!showPassword)
  }

  function goToLogin() {
    navigate('/Login')
  }

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setReq(true)
      await UserServices.registerUser({email, name, lastName, password, nickname, bio})
      setReq(false)
      goToLogin()
    } catch (error: any) {
      setReq(false)
      setMsgErrorRegister(error.message)
    }
  }

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <h1>Register</h1> 
          <p>{msgErrorRegister}</p>
          <form onSubmit={ registerUser }>
            <div className="inputs-register">
              <InputLabel>
                <label>name:</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
              </InputLabel>
              <InputLabel>
                <label>last name:</label>
                <input type="text" onChange={e => setLastName(e.target.value)}/>
              </InputLabel>
              <InputLabel>
                <label>email:</label>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
              </InputLabel>
              <InputLabel>
                <label>password:</label>
                <input type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}/>
                <span onClick={ maskPassword }>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
              </InputLabel>
              <InputLabel>
                <label>confirm password:</label>
                <input type="password"/>
              </InputLabel>
              <InputLabel>
                <label>@nickname:</label>
                <input type="text" onChange={e => setNickname(e.target.value)}/>
              </InputLabel>
              <InputLabel>
                <label>bio:</label>
                <input type="text" onChange={e => setBio(e.target.value)}/>
              </InputLabel>
            </div>
            {req === false ? 
              <button type="submit">Register</button>
              :
              <button><CircularProgress color='primary' size={20}/></button>
            }
          </form>
          <div className="register-text">
            <RegisterText onClick={ goToLogin }><p> have an account? login</p></RegisterText>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}

export default Register
