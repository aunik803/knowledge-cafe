import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './components/Header'
import Cafe from './components/Cafe/Cafe'
import Bonus from './components/Bonus';

function App() {

  return (
    <div className="App">
      <Header />
      <Cafe />
      <Bonus />
      <ToastContainer />
    </div>
  )
}

export default App

