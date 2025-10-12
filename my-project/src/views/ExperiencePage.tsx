import type { Experience } from "../components/Types";
import { useState } from "react";

interface ExperiencePageProps {
    experience: Experience | undefined;
    handlePage: (page: string) => void;
    handleDelete: (id: string) => void;
};

// helper function to format date
const formatDate = (isoDate?: string) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year.slice(-2)}`;
};


export default function ExperiencePage(props: ExperiencePageProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleshowDeleteModal = () => {
      setShowDeleteModal(true);
    };
  
    const handleshowDeleteModalClose = () => {
      setShowDeleteModal(false);
    };

    const handleDeleteClick = () => {
      props.handleDelete(props.experience!.id);
    };
    
   
    if (!props.experience) return <div>Experience not found</div>;
    return (
        <div className="experience-page-container" >
          <div className="experience-page-content" >
          
          <button className="back-button-experience-page" onClick={() => props.handlePage("list")}><img src="/next-icon.svg" alt="" /></button>
          <h2>{props.experience.title}</h2>
          <p>{props.experience.description}</p>
          <hr />

        <div className="details-container-experience-page">

        
          <div className="category-container">
            <p className={`category ${props.experience.category === "skill" ? "skill-tag" : "adventure-tag"}`} >{props.experience.category}</p>
            <p className="subcategory">{props.experience.subcategory ? `(${props.experience.subcategory.toLowerCase()})` : ""}</p>
            {props.experience.subcategory && <img src={`/${props.experience.subcategory.toLowerCase()}.svg`} alt={props.experience.subcategory} />}
          </div>
          
          <p>{props.experience.location}</p>

          <div className="date-time-container-experience-page">
            <p>{formatDate(props.experience.date)}</p>
            <p>{props.experience.time}</p>
          </div>

        </div>

          {props.experience.photo && <img className="experience-photo" src={props.experience.photo} alt={props.experience.title} />}

          <div className="modifying-buttons-experience-page" >
            <button onClick={() => props.handlePage("edit")} className="edit-button-experience-page" >Edit</button>
            <button className="delete-button-experience-page" onClick={handleshowDeleteModal} >Delete</button>
          </div>

          </div>

          {/* Delete Modal */}
          {showDeleteModal && (
        <>
          <div className="delete-modal-backdrop"></div>
          <div className="delete-modal">
          <p>Are you sure you want to delete this experience?</p>
          <span>This experience cannot be restored after you delete it.</span>
            <div className="delete-modal-buttons">
            <button className="dont-delete-button-delete-modal" onClick={handleshowDeleteModalClose}>
                No, I don't delete it
              </button>
              <button onClick={handleDeleteClick}
                      className="yes-delete-button-delete-modal">
                Yes, I want to delete it
              </button>
            </div>
          </div>
        </>
      )}
        </div>
);}