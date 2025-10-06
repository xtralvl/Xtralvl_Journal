import { useRef, useState } from "react";
import BackButton from '../components/BackButton';

const subcategoriesMap = {
  adventure: ["Land", "Water", "Air", "Mountain", "Snow"],
  skill: ["Physical", "Mental", "Survival", "Hard", "Creative"],
};

export default function ExperienceLogPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");  
  const [category, setCategory] = useState<"adventure" | "skill" | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  // ide kell a ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setPhoto(file);
        setPhotoUrl(URL.createObjectURL(file));
    }
  };

  const handlePhotoDelete = () => {
    setPhotoUrl("")
  };

  return (
    <div className="experience-log-page-page-wrapper">
      <div className="page-content">
        <BackButton />

        {/* Title */}
        <div className="title">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        {/* Description */}
        <div className="description">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
          rows={4} />
        </div>

        {/* Category */}
        <div className="category-selector">
          <span>Category:</span>
          <div>
            <button
              className={category === "adventure" ? "active" : ""}
              onClick={() => { setCategory("adventure"); setSubcategory(null); }}
            >
              Adventure
            </button>

            <button
              className={category === "skill" ? "active" : ""}
              onClick={() => { setCategory("skill"); setSubcategory(null); }}
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
            <br />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="time">
            <label>Time:</label>
            <br />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
        </div>
        
        {/* Location */}
        <div className="location">
          <label>Location:</label>
          <input type="text" placeholder="Start typing in the location.." value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        

        {/* Photo upload */}
        <div 
          className="photo-upload-area" 
          onClick={() => fileInputRef.current?.click()} 
        >
            {photoUrl ? (
                <img src={photoUrl} alt="preview" className="photo-preview"/>
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

        {/*Delete Photo Button */}
        <button className={`delete-photo-button ${photoUrl ? "delete-photo-display" : "delete-photo-hide"}`} onClick={handlePhotoDelete}>
            Delete Photo
        </button>

        {/* Buttons */}
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}
