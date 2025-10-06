import Searcher from '../components/HomePageComponents/Searcher';

interface HomePageProps {
    handlePage: (page: string) => void;
};

export default function HomePage({handlePage}: HomePageProps) {

    
    return (
        <>
        <div className='homepage-container' >
        <Searcher
            handlePage={handlePage}
        />
            
        <button onClick={() => handlePage("addNew")} className='log-new-experience'>Log New Experience</button>

        <button className='logged-experiences-button-homepage' >Logged Experiences</button>

        <div className='homepage-logo-container'>
            <img className="homepage-logo" src="/logo.png" alt="" />
        </div>
        </div>
        </>
    )
}