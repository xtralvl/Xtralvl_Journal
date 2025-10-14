import type React from "react";
import { useState } from "react";
import type { Experience } from "../Types";

interface SearcherProps {
    handlePage: (page: string, id?: string) => void;
    savedExperiences: Experience[] | undefined;
};

export default function Searcher({handlePage, savedExperiences}: SearcherProps) {

    const [isFilteringActive, setIsFilteringActive] = useState(false);
    const [filteredResults, setFilteredResults] = useState<Experience[]>([]);
    const [isTooltipShown, setIsTooltipShown] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    // this function will be invoked when typing into the search input
    const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
    
        if (input.length > 0) {
            setIsFilteringActive(true); // show dropdown only if at least 1 character
        } else {
            setIsFilteringActive(false); // hide dropdown if input is empty
        }
    
        if (savedExperiences) {
            const results = savedExperiences.filter(exp =>
                exp.title.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredResults(results);
        }
    };
    
    const showTooltips = () => {
        setIsTooltipShown(prev => !prev);
    };


    return (
        <>
        <div className="searcher-container">
            <form onSubmit={handleSubmit} action="">
                <div className="search-icon-decor">
                    <img src="/search-icon.svg" alt="Search icon" />
                </div>
            <input onChange={handleFiltering} type="text" placeholder="Search your experiences.."/>
            </form>
            <div className={`results-dropdown-window ${isFilteringActive ? "results-dropdown-window-show" : "results-dropdown-window-hide"}`} >
                <ul>
                    {filteredResults.length > 0 ? (
                        filteredResults.slice(0, 3).map(exp => (
                            <li key={exp.id}>
                                <a href="#" onClick={() => handlePage("exp", exp.id)} >
                                    {exp.title}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li>No results found</li>
                    )}
                </ul>
                <div className="searcher-tooltip-container">
                    {isTooltipShown && <p>Only the first three results are always shown here.</p>}
                    <button onClick={showTooltips} className="tooltip-button" >
                        <img src="info-icon.svg" alt="Info" />
                    </button>
                </div>
        </div>


            <button onClick={() => handlePage("faq")} className="faq-button">FAQ</button>
        </div>
        </>
    )
}