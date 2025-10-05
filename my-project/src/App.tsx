import { useState, useEffect } from "react";
import HomePage from "./views/HomePage";
import SplashScreen from './views/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <SplashScreen /> : <HomePage />}
    </>
  );
}

export default App;
