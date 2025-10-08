import type { Experience } from "../components/Types";

interface ExperiencePageProps {
    experience: Experience | undefined;
    handlePage: (page: string) => void;
};

// helper function to format date
const formatDate = (isoDate?: string) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year.slice(-2)}`;
};


export default function ExperiencePage(props: ExperiencePageProps) {
    if (!props.experience) return;
    return (
        <div className="experience-page-container" >
          <div className="experience-page-content" >
          
          <button className="back-button-experience-page" onClick={() => props.handlePage("list")}><img src="/next-icon.svg" alt="" /></button>
          <h2>{props.experience.title}</h2>
          <p>{props.experience.description}</p>
          <hr />

          <div className="category-container">
            <p className={`category ${props.experience.category === "skill" ? "skill-tag" : "adventure-tag"}`} >{props.experience.category}</p>
            <p className="subcategory" >{`(${props.experience.subcategory?.toLocaleLowerCase()})`}</p>
            <img src={`/${props.experience.subcategory!.toLowerCase()}.svg`} alt="" />
          </div>
          
          <p>{props.experience.location}</p>

          <div className="date-time-container-experience-page">
            <p>{formatDate(props.experience.date)}</p>
            <p>{props.experience.time}</p>
          </div>

          <img className="experience-photo" src={props.experience.photo || "/placeholder.svg"} alt={props.experience.title} />

          
          </div>
        </div>
);}