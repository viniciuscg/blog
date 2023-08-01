import React ,{ useState } from "react"
import { Card, CardContent, InputLabel, LoginText, Wrapper } from "./style"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { UserServices } from "../../Services/User/UserServices";
import { CircularProgress } from "@mui/material";
 
function Login() {

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const [req, setReq] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgErrorRegister, setMsgErrorRegister] = useState('')
  
  function maskPassword() {
    setShowPassword(!showPassword)
  }
  
  function goToRegister() {
    navigate('/Register')
  }

  function goToProfile() {
    navigate('/Profile')
  }

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setReq(true)
      await UserServices.login({email, password})
      setReq(false)
      goToProfile()
    } catch (error) {
      setReq(false)
      setMsgErrorRegister((error as Error).message)
    }
  }

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <h1>Login</h1> 
          <p>{msgErrorRegister}</p>
          <form onSubmit={login}>
            <div className="inputs-login">
              <InputLabel>
                <label>email:</label>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
              </InputLabel>
              <InputLabel>
                <label>password:</label>
                <input type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}/>
                <span onClick={ maskPassword }>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
              </InputLabel>
            </div>
            {req === false ? 
              <button type="submit" >Login</button>
              :
              <button disabled ><CircularProgress color='primary' size={20}/></button>
            }
          </form>
          <div className="login-text">
            <LoginText onClick={goToRegister}><p>dont have an account? sign up</p></LoginText>
            <LoginText><FaLock/><p>Forgot your password?</p></LoginText>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}

export default Login

