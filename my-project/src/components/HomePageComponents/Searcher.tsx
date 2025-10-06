export default function Searcher() {
    
    return (
        <>
        <div className="searcher-container">
            <form action="">
            <button className="submit-button" type="submit" ><img src="/search-icon.svg" alt="" /></button>
            <input type="text" placeholder="Search your experiences.."/>
            </form>

            <button className="faq-button">FAQ</button>
        </div>
        </>
    )
}