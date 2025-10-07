import { useState, useEffect } from "react";
import SplashScreen from './views/SplashScreen';
import HomePage from "./views/HomePage";
import ExperienceLogPage from './views/AddExperience';
import ExperiencesListPage from './views/ExperiencesListPage';
import FAQPage from './views/FAQPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  const handlePage = (page: string) => {
    setCurrentPage(page)
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : currentPage === "home" ? (
        <HomePage handlePage={handlePage} />
      ) : currentPage === "faq" ? (
        <FAQPage handlePage={handlePage} />
      ) : currentPage === "addNew" ? (
        <ExperienceLogPage handlePage={handlePage} />
      ) : currentPage === "list" ? (
        <ExperiencesListPage handlePage={handlePage} />
      ) : <HomePage handlePage={handlePage} />}
    </>
  );
  }

export default App;
