import { useState } from 'react'
import axios from 'axios'
const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const authObject = {
      'Project-ID': '0669c1e6-7feb-4de1-bbdd-3797671a4715',
      'User-Name': username,
      'User-Secret': password,
    }
    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      window.location.reload()
    } catch (error) {
      setError('Ooop!, Incorrect credentials.')
    }
  }
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
