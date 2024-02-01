import React from 'react';
import '../App.css';
import Details from './Details';
import { useNavigate } from 'react-router-dom';
export default function Result({ result ,openDetails}) {
const navigation=useNavigate();

if (!result || !result.show || !result.show.image || !result.show.image.medium) {
    return null; 
}
const handleClick=()=>{
    navigation(`/details/${result.show.id}`,{ state: { data: result } });
}
const { show } = result;
  return (
    <div className='result pb-2'>
      <div className='border border-dark border-4'>
        
        {show.image.medium && (
            <img src={show.image.medium}  />
        )}
      </div>
      <div className='pb-2 bg-dark text-white'>
        <h5>{show.name}</h5>
        <button className='btn btn-secondary btn-sm' onClick={handleClick}>
          Show Details
        </button>
      </div>
    </div>
  );
}
