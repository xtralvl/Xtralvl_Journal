import { useState, useEffect } from "react";
import SplashScreen from './views/SplashScreen';
import HomePage from "./views/HomePage";
import ExperienceLogPage from './views/AddExperience';
import ExperiencesListPageEmpty from "./views/ExperiencesListPageEmpty";
import ExperiencesListPage from './views/ExperiencesListPage';
import ExperiencePage from './views/ExperiencePage';
import FAQPage from './views/FAQPage';
import type { Experience } from "./components/Types";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [isThereList, _setIsThereList] = useState(true);
  const [currentExperienceId, setCurrentExperienceId] = useState<string | null>(null);
  const [savedExperiences, setSavedExperiences] = useState<Experience[]>([]);

  // load saved experiences from localStorage once
  useEffect(() => {
    const data = localStorage.getItem("savedExperiences");
    if (data) {
      setSavedExperiences(JSON.parse(data));
    }
  }, []);

  const handlePage = (page: string, id?: string) => {
    setCurrentPage(page);
    if (id) {
      setCurrentExperienceId(id);
    }
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
      ) : currentPage === "exp" ? (
        <ExperiencePage
          experience={savedExperiences.find(exp => exp.id === currentExperienceId)}
          handlePage={handlePage}
        />
      ) : null}
    </>
  );
}