import Searcher from "../components/HomePageComponents/Searcher";

interface HomePageProps {
  handlePage: (page: string) => void;
}



export default function HomePage({ handlePage }: HomePageProps) {
  return (
    <div className="homepage-container">
      {/* Searcher sits at the top */}
      <div className="searcher-component-container first-row-homepage" >
      <Searcher handlePage={handlePage} />
      </div>

    <div className="second-row-homepage" >
        <button onClick={() => handlePage("addNew")} className="log-new-experience">
            Log New Experience
        </button>

        <button onClick={() => handlePage("random")} className="random-experience-button-homepage">
            Generate a random experience
        </button>

        <button onClick={() => handlePage("list")} className="logged-experiences-button-homepage">
            Logged Experiences
        </button>
    </div>

      <div className="homepage-logo-container third-row-homepage">
        <img className="homepage-logo" src="/logo.png" alt="XtraLvl Journal logo" />
      </div>
    </div>
  );
}
