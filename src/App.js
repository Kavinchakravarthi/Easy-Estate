
import Aboutus from './ABOUTUS/Aboutus';
import Facilities from './ADDPROPERTY/Facilities';
import Parentcomponent from './ADDPROPERTY/Parentcomponent';
import Upload from './ADDPROPERTY/Upload';
import './App.css';

import Houses from './BIGGERHOME/Houses';
import Ourvalue from './OURVALUES/Ourvalue';
import Properties from './PROPERTIES/Properties';
import Mainroot from './ROOTCOMPONENT/Mainroot';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Btnsuccess from './ADDPROPERTY/Btnsuccess';
import { useState } from 'react';

function App() {

    const[progress,setprogress]=useState(0);

    const increammentprogress=()=>{
      setprogress(prevprogress => Math.min(prevprogress+25,100));
    }

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainroot/>}></Route>
      <Route path='/residencies' element={<Properties/>}></Route>
      <Route path='/Houses/:e' element={<Houses/>}></Route>
      <Route path='/success' element={<Btnsuccess progress={progress} onNextStep={increammentprogress}/>}></Route>
      <Route path='/upload' element={<Upload progress={progress} onNextStep={increammentprogress} />} ></Route>
      <Route path='/Basics' element={<Parentcomponent progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/facility' element={<Facilities progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/ourvalue' element={<Ourvalue/>}></Route>
      <Route path='/home' element={<Mainroot/>}></Route>
      <Route path='/contact' element={<Aboutus/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
