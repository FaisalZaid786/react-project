import './App.css'
import StoreProvider, { userContext } from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return (
    <StoreProvider>
      <Login />
      <Profile />
    </StoreProvider>
  )
}

export default App;
