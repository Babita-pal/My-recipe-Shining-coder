import React, { useState, useEffect } from 'react';
import ImageGrid from './components/ImageGrid';


function App() {
  const [search, setSearch] = useState('');
  const [call, setCall] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = (searchTerm = 'banana') => {
    setLoading(true);
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchTerm}&key=8d488d17-fae0-474f-a48f-b7eab7d8c578`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setData(res.data.recipes);
        console.log('API data:', res.data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData(search);
  }, [call]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCall(prev => !prev);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search for a recipe..." 
        />
        <button type="submit">Search</button>
      </form>
      <ImageGrid data={data} loading={loading} />
    </>
  );
}

export default App;
