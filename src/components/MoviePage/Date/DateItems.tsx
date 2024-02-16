// DateItems.tsx

import React from 'react';
import { DateObject } from '../../Data/Dates';
import './DateItems.css'

interface DateItemsProps {
  date: DateObject; // Use DateObject as a type
}

const DateItems: React.FC<DateItemsProps> = ({ date }) => {
  return (
    <div className='date_main-container'>
      <div className='date-both_month'>
            <div className='date_month'>{date.date}</div>
            <div  className='date_month'>{date.month}</div>
      </div>

      <div className='date-day'>{date.day}</div>
      
    </div>
  );
}

export default DateItems;
