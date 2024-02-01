import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Details = () => {
  const location = useLocation();
  const showDetails = location.state?.data;
  const navigation=useNavigate();
  if (!showDetails) {
    return <div>No show details found</div>;
  }
  const handleClick=()=>{
    navigation('/booktickets');
  }
  const { show } = showDetails;

  return (
    <div >
      <div className='d-flex flex-row justify-content-evenly'>
        
        <div className='d-flex flex-column justify-content-evenly'>
            <h3 className='text-danger'> {show.name}</h3>
            <h4>Type: {show.type}</h4>
            <h4>Language: {show.language}</h4>
        </div>
        <div className='pb-2'>
            <img src={show.image.medium} alt={show.name} />
        </div>
      </div>
      <div className='container pb-1  bg-info rounded-3'>
          <h3 >Description</h3>
    
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
      <button  className='btn btn-primary'onClick={handleClick}>Book Ticket</button>
      </div>
    
    </div>
  );
};

export default Details;
