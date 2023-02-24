import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { AdminAssig } from './Components/Mentors/AdminAssig';
import AdminTask from './Components/Mentors/AdminTask';
import { Lectures } from './Components/Students/Lectures';
import { MainNav } from './Components/Navbar/MainNav';
import { Home } from './Components/Pages/Home/Home';
import SignIn from './Components/Pages/Login/Login';
import { StudentAssignment } from './Components/Students/StudentAssignment';
import { AssignmentDescription } from './Components/Students/AssignmentDescription';
import SignUp from './Components/Pages/Register/SignUp';
import { Attendence } from './Components/Mentors/Attendence';


function App() {
  const [isAuthorized,setIsAuthorised]=useState(true);
  return (
    <div className="App">
     {
      isAuthorized===false?(<>

      <Routes>
      <Route path="/register" element={<SignUp/>}/>
          <Route path='/login' element={<SignIn/>}/>
      </Routes>
      </>):(
        <>
        <MainNav/>
        <Routes>
        <Route path="/home" element={<Home/>}/>
          <Route path="/uploadLecture" element={<AdminTask/>}/>
          <Route path="/addAssignment" element={<AdminAssig/>}/>
          <Route path="/getLectures" element={<Lectures/>}/>
          <Route path="/attendence" element={<Attendence/>}/>
          <Route path="/getAssignments" element={<StudentAssignment/>}/>
          <Route path="assignments/id=/:id" element={<AssignmentDescription/>}/>
        </Routes>
        </>
      )
     }
    </div>
  );
}

export default App;
