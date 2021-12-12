import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch}/>
      <UserList search={search}/>
    </div>
  );
}

export default App;
