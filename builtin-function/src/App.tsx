import './App.css';
import Subjects from './components/Subjects';
import Header from './components/Header';
import Lists from './components/Lists';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubject from './components/AddSubject';
import AddFunction from './components/AddFunction';

function App() {
  const [ subject, setSubject ] = useState(0);
  const onChange = (subject:number) => {
    setSubject(subject);
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Header sitename='typescript' onChange={onChange}/>
      <Routes>
        <Route path='/' element={<>
          <Subjects onChange={onChange}/>
          <Lists subject={subject}/>
        </>}/>
        <Route path='/addSubject' element={<AddSubject />}/>
        <Route path='/addFunction' element={<AddFunction />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;