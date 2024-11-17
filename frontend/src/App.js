import './App.css';
import Header from './Header'
import {Routes , Route} from 'react-router-dom'
import Footer from './Footer'
import Main  from './Main'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <>
    
    <div className="flex flex-col justify-between">
      <Header />
      <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
