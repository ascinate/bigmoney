"use client";
 
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 

function Calender() {
  const [value, setValue] = useState(new Date());

const onChange = (newDate) => {
        setValue(newDate);
    };
 
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}
 
export default Calender;