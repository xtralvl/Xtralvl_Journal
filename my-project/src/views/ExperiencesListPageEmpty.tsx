interface ExperiencesListPageEmptyProps {
  handlePage: (page: string) => void;
}

export default function ExperiencesListPageEmpty({ handlePage }: ExperiencesListPageEmptyProps) {
  return (
    <div className="empty-experienceslist-page">
      {/* Fixed Back Button */}
      <button onClick={() => handlePage("home")} className="back-button-list">
        <img src="/next-icon.svg" alt="Back" />
      </button>

      <div className="experienceslist-page-empty-container">
        <div className="experienceslist-page-empty-content">
          <h1>Nothing to show, yet..</h1>
          <h2>Let’s log your first experience!</h2>
          <button
            onClick={() => handlePage("addNew")}
            className="log-new-experience-button-listpage"
          >
            Log New Experience
          </button>

          <div className="experienceslist-page-logo-container">
            <img className="experienceslist-page-empty-logo" src="/logo.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
