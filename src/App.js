import './App.css';
import Houses from './BIGGERHOME/Houses';
import Properties from './PROPERTIES/Properties';
import Mainroot from './ROOTCOMPONENT/Mainroot';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainroot/>}></Route>
      <Route path='/residencies' element={<Properties/>}></Route>
      <Route path='/Houses/:e' element={<Houses/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
