import { useState, useEffect } from "react";
import SplashScreen from "./views/SplashScreen";
import HomePage from "./views/HomePage";
import ExperiencesListPageEmpty from "./views/ExperiencesListPageEmpty";
import ExperiencesListPage from "./views/ExperiencesListPage";
import ExperiencePage from "./views/ExperiencePage";
import FAQPage from "./views/FAQPage";
import AddExperience from "./views/AddExperience";
import RandomExperience from "./views/RandomExperience";
import EditExperiencePage from "./views/EditExperiencePage";
import type { Experience } from "./components/Types";

type Page = "home" | "faq" | "addNew" | "list" | "emptyList" | "exp" | "random" | "edit";

function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Initial set
setVh();

// Update on resize
window.addEventListener('resize', setVh);


export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentExperienceId, setCurrentExperienceId] = useState<string | null>(null);
  const [savedExperiences, setSavedExperiences] = useState<Experience[]>(() => {
    const stored = localStorage.getItem("savedExperiences");
    return stored ? JSON.parse(stored) : [];
  });

  // 🗑️ Delete experience
  const handleDelete = (id: string) => {
    const updated = savedExperiences.filter(exp => exp.id !== id);
    setSavedExperiences(updated);
    localStorage.setItem("savedExperiences", JSON.stringify(updated));
    setCurrentPage(updated.length > 0 ? "list" : "emptyList");
  };

  // 💾 Add new experience
  const handleAddExperience = (newExp: Experience) => {
    const updated = [...savedExperiences, newExp];
    setSavedExperiences(updated);
    localStorage.setItem("savedExperiences", JSON.stringify(updated));
    console.log("💾 New experience saved:", newExp);
  };

  // 🧭 Handle navigation between pages
  const handlePage = (page: string, id?: string) => {
    setCurrentPage(page as Page);
    if (id) setCurrentExperienceId(id);
    console.log(`➡️ Navigated to page: ${page}${id ? ` (Experience ID: ${id})` : ""}`);
  };

    // 💾 Update experience
  const handleUpdateExperience = (updatedExperience: Experience) => {
    const updatedExperiences = savedExperiences.map(exp =>
      exp.id === updatedExperience.id ? updatedExperience : exp
    );
    setSavedExperiences(updatedExperiences);
    localStorage.setItem("savedExperiences", JSON.stringify(updatedExperiences));
  };
  

  // 🕒 Hide splash after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      console.log("🟢 Splash screen hidden.");
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // 🎯 Get the current experience
  const currentExperience = savedExperiences.find(exp => exp.id === currentExperienceId);

  // 🧩 Render correct page
  if (showSplash) return <SplashScreen />;

  switch (currentPage) {
    case "home":
      return <HomePage handlePage={handlePage} />;

    case "faq":
      return <FAQPage handlePage={handlePage} />;

    case "addNew":
      return <AddExperience handleAddExperience={handleAddExperience} handlePage={handlePage} />;

    case "list":
      return savedExperiences.length > 0 ? (
        <ExperiencesListPage handlePage={handlePage} />
      ) : (
        <ExperiencesListPageEmpty handlePage={handlePage} />
      );

    case "emptyList":
      return <ExperiencesListPageEmpty handlePage={handlePage} />;

    case "exp":
      return (
        <ExperiencePage
          experience={currentExperience}
          handlePage={handlePage}
          handleDelete={handleDelete}
        />
      );

      case "random":
      return (
        <RandomExperience
        handlePage={handlePage}
        />
      );

      case "edit":
        if (!currentExperience) return null;
        return (
          <EditExperiencePage
          handleUpdateExperience = {handleUpdateExperience}
          experience={currentExperience}
          handlePage={handlePage}
          />
        );
  

    default:
      return null;
  }
}
