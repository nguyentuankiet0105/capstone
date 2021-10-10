import 'antd/dist/antd.css';
import Home from './Screens/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './Style/App.scss';

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
