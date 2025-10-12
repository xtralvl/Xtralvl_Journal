import { useRef, useState, useEffect } from "react";
import type { Experience } from "../components/Types";

const subcategoriesMap = {
  adventure: ["Land", "Water", "Air", "Mountain", "Snow"],
  skill: ["Physical", "Mental", "Survival", "Hard", "Creative"],
};

interface EditExperiencePageProps {
  experience: Experience;
  handlePage: (page: string) => void;
  handleUpdateExperience: (updatedExperience: Experience) => void;
};

export default function EditExperiencePage({ experience, handlePage, handleUpdateExperience }: EditExperiencePageProps) {
  const [title, setTitle] = useState(experience.title);
  const [description, setDescription] = useState(experience.description);

  const initialCategory =
  experience.category === "adventure" || experience.category === "skill"
    ? experience.category
    : null;

  const [category, setCategory] = useState<"adventure" | "skill" | null>(initialCategory);
  const [subcategory, setSubcategory] = useState<string | null>(experience.subcategory ?? null);
  const [date, setDate] = useState(experience.date);
  const [time, setTime] = useState(experience.time);
  const [location, setLocation] = useState(experience.location);
  const [_photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(experience.photo ?? null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [error, setError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
  
      const reader = new FileReader();
      reader.onloadend = () => setPhotoUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  
  const handlePhotoDelete = () => setPhotoUrl("");

  const handleshowCancelModal = () => setShowCancelModal(true);
  const handleshowCancelModalClose = () => setShowCancelModal(false);

  const updatedExperience: Experience = {
    id: experience.id,
    title,
    description,
    category,
    subcategory,
    date,
    time,
    location,
    photo: photoUrl
  };

  const handleUpdate = () => {
    if (title) {
      setShowUpdateModal(true);
      setError(false);
      handleUpdateExperience(updatedExperience);
    } else {
      setShowUpdateModal(false);
      setError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlesShowListAfterSave = () => {
    setShowUpdateModal(false);
    document.body.style.overflow = "auto";
    setTimeout(() => handlePage("list"), 50);
  };

  useEffect(() => {
    document.body.style.overflow = showUpdateModal ? "hidden" : "auto";
  }, [showUpdateModal]);

  return (
    <>
      <div className="experience-log-page-page-wrapper">

      <button
            onClick={handleshowCancelModal}
            className="back-button-addNew"
          >
            <img src="/next-icon.svg" alt="Back" />
          </button>

        <div className="page-content">

          {/* Title */}
          <div className="title">
            <label className={error ? "error-state-title" : "no-error-state-title"} >Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={error ? "error-state-title-input" : "no-error-state-title-input"}
            />
            <span className={error ? "error-msg-title" : "no-error-msg-title"} >You must provide a title before save.</span>
          </div>

          {/* Description */}
          <div className="description">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          {/* Category */}
          <div className="category-selector">
            <span>Category:</span>
            <div>
              <button
                className={category === "adventure" ? "active" : ""}
                onClick={() => {
                  setCategory("adventure");
                  setSubcategory(null);
                }}
              >
                Adventure
              </button>
              <button
                className={category === "skill" ? "active" : ""}
                onClick={() => {
                  setCategory("skill");
                  setSubcategory(null);
                }}
              >
                Skill
              </button>
            </div>
          </div>

          {/* Subcategories */}
          {category && (
            <div className="subcategories">
              {subcategoriesMap[category].map((sub) => (
                <button
                  key={sub}
                  className={`${subcategory === sub ? "active" : ""} subcategory`}
                  onClick={() => setSubcategory(sub)}
                >
                  <img src={`/${sub.toLowerCase()}.svg`} alt="" />
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="date-time-location-container">

          {/* Date & Time */}
          <div className="date-time">
            <div className="date">
              <label>Date:</label>
              <br />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="time">
              <label>Time:</label>
              <br />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          {/* Location */}
          <div className="location">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Start typing.."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          </div>

          {/* Photo upload */}
          <div
            className="photo-upload-area"
            onClick={() => fileInputRef.current?.click()}
          >
            {photoUrl ? (
              <img src={photoUrl} alt="preview" className="photo-preview" />
            ) : (
              <>
                <img src="/img.svg" alt="" />
                <span>Click here to upload a photo</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>

          <button
            className={`delete-photo-button ${
              photoUrl ? "delete-photo-display" : "delete-photo-hide"
            }`}
            onClick={handlePhotoDelete}
          >
            Delete Photo
          </button>

          <div className="buttons">
            <button onClick={handleshowCancelModal} className="cancel">
              Cancel
            </button>
            <button onClick={handleUpdate} className="update">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <>
          <div className="cancel-modal-backdrop"></div>
          <div className="cancel-modal">
            <p>Are you sure, want to exit?</p>
            <span>All your unsaved data will be lost.</span>
            <div className="cancelmodal-buttons">
              <button className="continue-button-cancelmodal" onClick={handleshowCancelModalClose}>
                No, I continue
              </button>
              <button onClick={() => handlePage("home")} className="exit-button-cancelmodal">
                Yes, I want to exit
              </button>
            </div>
          </div>
        </>
      )}

      {/* Save Modal */}
      {showUpdateModal && (
        <>
          <div className="update-modal-backdrop"></div>
          <div className="update-modal">
            <p>Experience updated!</p>
            <span>Now you can see it changed in the logged experiences menu.</span>
            <div className="updatemodal-buttons">
              <button onClick={() => handlePage("home")} className="go-to-home-page-button-updatemodal">
                Go to Home Page
              </button>
              <button onClick={handlesShowListAfterSave} className="see-logged-experiences-button-updatemodal">
                See logged experiences
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
