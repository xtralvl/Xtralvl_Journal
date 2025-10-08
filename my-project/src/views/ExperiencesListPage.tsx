import ExperienceListElement from "../components/ExperienceListElement";
import ExperiencesListPageEmpty from "./ExperiencesListPageEmpty";

interface ExperiencesListPageProps {
  handlePage: (page: string) => void;
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
  // Get data from localStorage
  const stored = localStorage.getItem("savedExperiences");

  // Parse it into an array or use empty array if null
  const experiences: Experience[] = stored ? JSON.parse(stored) : [];

  return (

    <>
      <div className="experiences-list-page">
        <div className="experiences-list-page-content" >
        <button onClick={() => handlePage("home")} className="back-button-list" ><img src="/next-icon.svg" alt="" /></button>
        {/* If there are saved experiences, show them */}
        {experiences.length > 0 ? (
          experiences.map((experience) => (
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

    </>
  );
}
