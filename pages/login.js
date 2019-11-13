import '../style/global.css'

import { info, page, title } from '../style/style.css'

import { LoginForm } from '../components/LoginForm'
import Router from 'next/router'
import cookie from 'js-cookie'
import { loginUser } from '../utils/api'
import { useState } from 'react'

const Login = () => {
  const [infoMessage, setInfoMessage] = useState('')

  const onLogin = async (data) => {
    const user = await loginUser(data)

    if (user.token) {
      cookie.set('st_token', user.token)

      setInfoMessage('Success')

      setTimeout(() => {
        setInfoMessage('')

        Router.push({
          pathname: '/',
          query: {}
        })
      }, 1000)
    }
  }

  return (
    <div className={page}>
      <h3 className={title}>Stasher Login!</h3>

      <LoginForm onLogin={onLogin} />

      {infoMessage && <p className={info}>{infoMessage}</p> }
    </div>
  )
}

export default Login
