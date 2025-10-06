import { useState, useEffect } from "react";
import HomePage from "./views/HomePage";
import SplashScreen from './views/SplashScreen';
import ExperienceLogPage from './views/ExperienceLogPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ExperienceLogPage />
      {/*showSplash ? <SplashScreen /> : <HomePage /> */}
    </>
  );
}

export default App;
