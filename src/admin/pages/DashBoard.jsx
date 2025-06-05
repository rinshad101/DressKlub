import React, { useContext } from 'react';
import DataContext from '../../ContextApi/DataContext';
import UserContext from '../../ContextApi/UserContext';

function DashBoard() {
  const { data, loading } = useContext(DataContext);
  const { user } = useContext(UserContext); 

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalUsers = user ? user.length : 0; 
  const totalProducts = data ? data.length : 0; 

  return (
    <div className="mt-32">
      <h1 className="text-3xl pl-10 font-semibold">Dashboard</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold">{totalUsers}</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-4xl font-bold">{totalProducts}</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
