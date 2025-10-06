import { useState, useEffect } from "react";
import SplashScreen from './views/SplashScreen';
import HomePage from "./views/HomePage";
import ExperienceLogPage from './views/ExperienceLogPage';
import FAQPage from './views/FAQPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/*showSplash ? <SplashScreen /> : <HomePage /> */}
      <FAQPage />
    </>
  );
}

export default App;
