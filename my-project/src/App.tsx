import { useState, useEffect } from "react";
import SplashScreen from "./views/SplashScreen";
import HomePage from "./views/HomePage";
import ExperiencesListPageEmpty from "./views/ExperiencesListPageEmpty";
import ExperiencesListPage from "./views/ExperiencesListPage";
import ExperiencePage from "./views/ExperiencePage";
import FAQPage from "./views/FAQPage";
import AddExperience from "./views/AddExperience";
import type { Experience } from "./components/Types";

type Page = "home" | "faq" | "addNew" | "list" | "emptyList" | "exp";

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

    default:
      return null;
  }
}
