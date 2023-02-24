import React, { useState } from 'react';
import MentorNav from './MentorNav';
import StudentNav from './StudentNav';

export const MainNav = () => {
    const [role,setRole]=useState("admin");
  return (
    <div style={{marginBottom:"3rem"}}>
        { role==="student"?(<StudentNav/>):(<MentorNav/>)}
    </div>
  )
}
