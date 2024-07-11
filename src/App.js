
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
import { useState } from 'react';
import Addimage from './ADDPROPERTY/Addimage';
import Signup from './FOOTER/Signup';
import Login from './FOOTER/Login';

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
      <Route path='/addimage' element={<Addimage progress={progress} onNextStep={increammentprogress}/>}></Route>
      <Route path='/upload' element={<Upload progress={progress} onNextStep={increammentprogress} />} ></Route>
      <Route path='/parentcomponent' element={<Parentcomponent progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/facility' element={<Facilities progress={progress} onNextStep={increammentprogress} />}></Route>
      <Route path='/ourvalue' element={<Ourvalue/>}></Route>
      <Route path='/home/:e' element={<Mainroot/>}></Route>
      <Route path='/contact' element={<Aboutus/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
