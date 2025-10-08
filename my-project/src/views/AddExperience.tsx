import { useRef, useState, useEffect } from "react";

const subcategoriesMap = {
  adventure: ["Land", "Water", "Air", "Mountain", "Snow"],
  skill: ["Physical", "Mental", "Survival", "Hard", "Creative"],
};

interface AddExperiencePageProps {
  handlePage: (page: string) => void;
}

export default function AddExperience({ handlePage }: AddExperiencePageProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"adventure" | "skill" | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [_photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [error, setError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      setPhotoUrl(URL.createObjectURL(file));
    }
  };

  const handlePhotoDelete = () => {
    setPhotoUrl("");
  };

  const handleshowCancelModal = () => {
    setShowCancelModal(true);
  };

  const handleshowCancelModalClose = () => {
    setShowCancelModal(false);
  };


  const handleshowSaveModal = () => {
    if (title) {
      setShowSaveModal(true);
      setError(false);

    } else {
      setShowSaveModal(false);
      setError(true)
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  };

  const handlesShowListAfterSave = () => {
    setShowSaveModal(false);
    document.body.style.overflow = "auto"; // re-enable scroll + clicks
    setTimeout(() => handlePage("list"), 50); // wait a frame before navigating
  };
  
  useEffect(() => {
    document.body.style.overflow = showSaveModal ? "hidden" : "auto";
  }, [showSaveModal]);

  return (
    <>
      <div className="experience-log-page-page-wrapper">
        <div className="page-content">
          <button
            onClick={() => handlePage("home")}
            className="back-button-addNew"
          >
            <img src="/next-icon.svg" alt="" />
          </button>

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

          {/* Date & Time */}
          <div className="date-time">
            <div className="date">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="time">
              <label>Time:</label>
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
            <button onClick={handleshowSaveModal} className="save">
              Save
            </button>
          </div>
        </div>
      </div>

        {/* CancelModal + Backdrop */}
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


      {/* SaveModal + Backdrop */}
      {showSaveModal && (
        <>
          <div className="save-modal-backdrop"></div>
          <div className="save-modal">
            <p>Experience saved!</p>
            <span>Now you can see it in the logged experiences menu.</span>
            <div className="savemodal-buttons">
              <button onClick={() => handlePage("home")} className="go-to-home-page-button-savemodal">
                Go to Home Page
              </button>
              <button onClick={handlesShowListAfterSave} className="see-logged-experiences-button-savemodal">
                See logged experiences
              </button>
            </div>
          </div>
        </>
      )}


    </>
  );
}
