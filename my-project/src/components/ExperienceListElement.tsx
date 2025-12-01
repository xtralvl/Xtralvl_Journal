interface Experience {
  id: string;
  title: string;
  description?: string;
  category?: string | null;
  subcategory?: string | null;
  date?: string; // "YYYY-MM-DD"
  time?: string;
  location?: string;
  photo?: string | null;
}

interface ExperienceListElementProps {
  key: string;
  experience: Experience;
  handlePage: (page: string, id?: string) => void;
}

// helper function to format date
const formatDate = (isoDate?: string) => {
  if (!isoDate) return;
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year.slice(-2)}`;
};

export default function ExperienceListElement(props: ExperienceListElementProps) {
  const exp = props.experience;

  return (
    <article className="experience-element">
      <div className="experience-element-left-column">
        <h2>{exp.title}</h2>

        <div className="experience-element-date-and-location-container">
          {exp.date && <time dateTime={exp.date}>{formatDate(exp.date)}</time>}
          {exp.location && <p>{exp.location}</p>}
        </div>

        <div className="see-more-button-container">
          <button
            onClick={() => props.handlePage("exp", exp.id)}
            className="see-more-button"
          >
            See more
          </button>
        </div>
      </div>

      <div className="experience-element-right-column">
        {exp.photo ? (
          <img
            className="experience-element-right-column-photo experience-element-photo-column-shown"
            src={exp.photo}
            alt={`Photo of ${exp.title}`}
          />
        ) : (
          <p className="experience-element-right-column-no-photo">
            No photo yet
          </p>
        )}
      </div>
    </article>
  );
}
