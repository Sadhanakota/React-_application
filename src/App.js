import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3001/customers`, {
        params: { search, sort, page }
      });
      setData(result.data);
    };

    fetchData();
  }, [search, sort, page]);
 const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = (sortBy) => {
    setSort(sortBy);
  };
  return (
    <div>
      {/* Search input, sort buttons, and pagination controls */}
<input
        type="text"
        placeholder="Search by name or location"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={() => handleSort('date')}>Sort by Date</button>
      <button onClick={() => handleSort('time')}>Sort by Time</button>
    <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Customer Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {data.map((customer, index) => (
        <tr key={index}>
          <td>{customer.sno}</td>
          <td>{customer.customer_name}</td>
          <td>{customer.age}</td>
          <td>{customer.phone}</td>
          <td>{customer.location}</td>
          <td>{customer.date}</td>
          <td>{customer.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
}

export default App;
