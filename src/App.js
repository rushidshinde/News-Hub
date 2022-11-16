import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {useState} from "react";

function App() {
  const appName = 'News Hub';
  const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0);
    const setProgressBar = (percent) =>{
        setProgress(percent);
    }
    return (
      <>
        <Router>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
            />
            <Navbar appName={appName}></Navbar>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <News apiKey={apiKey} setProgressBar={setProgressBar}></News>
                    }></Route>
                </Routes>
            </div>
            <Footer appName={appName}></Footer>
        </Router>
      </>
  );
}

export default App;
