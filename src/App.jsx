import { Route, Routes } from 'react-router';
import './styles/default.css';
import IndividualStartPage from './pages/IndividualStartPage.jsx';
import Introduction from './pages/Introduction.jsx';
import Contract from './pages/Contract.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndividualStartPage />} />
      <Route path="/Introduction" element={<Introduction />} />
      <Route path="/Contract" element={<Contract />} />

    </Routes>
    
  );
}

export default App;
