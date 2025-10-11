import ExperienceListElement from "../components/ExperienceListElement";
import ExperiencesListPageEmpty from "./ExperiencesListPageEmpty";

interface ExperiencesListPageProps {
  handlePage: (page: string, id?: string) => void;
}

interface Experience {
  id: string;
  title: string;
  description?: string;
  category?: string | null;
  subcategory?: string | null;
  date?: string;
  time?: string;
  location?: string;
  photo?: string | null;
}

export default function ExperiencesListPage({ handlePage }: ExperiencesListPageProps) {
  const stored = localStorage.getItem("savedExperiences");
  const experiences: Experience[] = stored ? JSON.parse(stored) : [];

  return (
    <div className="experiences-list-page">
      {/* Fixed back button */}
      <button onClick={() => handlePage("home")} className="back-button-list">
        <img src="/next-icon.svg" alt="Back" />
      </button>

      <div className="experiences-list-page-content">
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <ExperienceListElement
              key={experience.id}
              experience={experience}
              handlePage={handlePage}
            />
          ))
        ) : (
          <ExperiencesListPageEmpty handlePage={handlePage} />
        )}
      </div>
    </div>
  );
}
