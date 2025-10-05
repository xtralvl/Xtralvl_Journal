import Searcher from '../components/Searcher';

export default function HomePage() {
    return (
        <>
        <div className='homepage-container' >
        <Searcher />
            
        <button className='log-new-experience'>Log New Experience</button>

        <button className='logged-experiences-button-homepage' >Logged Experiences</button>

        <div className='homepage-logo-container'>
            <img className="homepage-logo" src="/logo.png" alt="" />
        </div>
        </div>
        </>
    )
}