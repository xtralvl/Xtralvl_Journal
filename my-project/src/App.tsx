import { useState, useEffect } from "react";
import SplashScreen from './views/SplashScreen';
import HomePage from "./views/HomePage";
import ExperienceLogPage from './views/AddExperience';
import ExperiencesListPageEmpty from "./views/ExperiencesListPageEmpty";
import ExperiencesListPage from './views/ExperiencesListPage';
import FAQPage from './views/FAQPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [isThereList, _setIsThereList] = useState(true);

  const handlePage = (page: string) => {
    setCurrentPage(page);
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
        isThereList ? (
          <ExperiencesListPage handlePage={handlePage} />
        ) : (
          <ExperiencesListPageEmpty handlePage={handlePage} />
        )
      ) : null}
    </>
  );
}

export default App;
