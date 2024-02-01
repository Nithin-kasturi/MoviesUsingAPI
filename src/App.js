import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';
import BookTickets from './Components/BookTickets';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center min-vh-100">
      <header className="w-100 text-center text-black mt-2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/booktickets" element={<BookTickets/>} />
            
          </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

// Create a separate component for the Home route
export default App;
