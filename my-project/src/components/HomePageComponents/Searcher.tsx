import type React from "react";

interface SearcherProps {
    handlePage: (page: string) => void;
};

export default function Searcher({handlePage}: SearcherProps) {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
    return (
        <>
        <div className="searcher-container">
            <form onSubmit={handleSubmit} action="">
            <button className="submit-button" type="submit" ><img src="/search-icon.svg" alt="" /></button>
            <input type="text" placeholder="Search your experiences.."/>
            </form>

            <button onClick={() => handlePage("faq")} className="faq-button">FAQ</button>
        </div>
        </>
    )
}