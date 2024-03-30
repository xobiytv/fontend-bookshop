import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from "./page/Main";
import LogOut from './componets/register/LogOut';
import Login from './componets/register/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />

      </Routes>
    </Router>
   
  )
}