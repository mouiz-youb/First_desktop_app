import './App.css';
import { Routes , Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';
import SideBar from './components/SideBar';

function App() {
 

  return (
    <div className='h-screen w-screen grid grid-cols-10 grid-rows-1 '>
      <SideBar />
      <div className='flex flex-col items-center justify-center col-start-3 col-end-11 row-start-1 row-end-2 border-[1px]'>
        <Routes>
          <Route path="/" element={<AdminPage/>} />
          <Route path="/client" element={<ClientPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;