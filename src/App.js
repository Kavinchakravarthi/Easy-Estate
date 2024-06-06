
import Btnsuccess from './ADDPROPERTY/Btnsuccess';
import Facilities from './ADDPROPERTY/Facilities';
import Parentcomponent from './ADDPROPERTY/Parentcomponent';
import Upload from './ADDPROPERTY/Upload';
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
      <Route path='/success' element={<Btnsuccess/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      <Route path='/Basics' element={<Parentcomponent/>}></Route>
      <Route path='/facility' element={<Facilities/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
