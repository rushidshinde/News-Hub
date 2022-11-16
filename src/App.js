import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
  const appName = 'News Hub';
  return (
      <>
        <Router>
            <Navbar appName={appName}></Navbar>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <News></News>
                    }></Route>
                </Routes>
            </div>
            <Footer appName={appName}></Footer>
        </Router>
      </>
  );
}

export default App;
