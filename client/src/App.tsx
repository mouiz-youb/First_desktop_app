import './App.css';
import { Routes , Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';
// Define a type for the expected API response for better type safety


function App() {
 

  return (
    <div className='flex justify-center  items-start h-screen w-screen '>
      <div className='flex flex-col items-center justify-center'>
        <Routes>
          <Route path="/" element={<AdminPage/>} />
          <Route path="/client" element={<ClientPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;