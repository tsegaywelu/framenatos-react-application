//import logo from './logo.svg';
import './App.css';
import Register from './regist';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//import { ReactDOM }  from 'react-dom/client';
import reactDOM from 'react-dom/client';
import Counter from './incre'
import Registration from './register/Register.component'
import Login from './login/Login.component';
/* const container = document.getElementById('add');
const add = reactDOM.createRoot(container);
add.render(<p>hello i am rendering because of adding app.js to inde.html </p>) */

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/co' element={<Counter/>}/>
      <Route path='/registration' element={<Registration/>}/>

      
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
