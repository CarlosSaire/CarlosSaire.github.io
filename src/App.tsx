import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Page925 from "./pages/Page925.tsx";
import MainNav from "./common/MainNav.tsx";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Navigate to="/9-25" replace />} />
        <Route path="/9-25" element={<Page925 />} />
         <Route path="*" element={<Navigate to="/9-25" replace />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
