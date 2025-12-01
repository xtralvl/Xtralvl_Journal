import type React from "react";
import { useState } from "react";
import type { Experience } from "../Types";

interface SearcherProps {
  handlePage: (page: string, id?: string) => void;
  savedExperiences: Experience[] | undefined;
}

export default function Searcher({ handlePage, savedExperiences }: SearcherProps) {
  const [isFilteringActive, setIsFilteringActive] = useState(false);
  const [filteredResults, setFilteredResults] = useState<Experience[]>([]);
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input.length > 0) {
      setIsFilteringActive(true);
    } else {
      setIsFilteringActive(false);
    }

    if (savedExperiences) {
      const results = savedExperiences.filter((exp) =>
        exp.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  const showTooltips = () => {
    setIsTooltipShown((prev) => !prev);
  };

  return (
    <div className="searcher-container">
      <div className="search-form-wrapper">
        <form
          onSubmit={handleSubmit}
          action=""
          className={isFilteringActive ? "active" : ""}
          role="search"
          aria-label="Search your experiences"
        >
          <div className="search-icon-decor">
            <img src="/search-icon.svg" alt="Search icon" />
          </div>
          <input
            onChange={handleFiltering}
            type="text"
            placeholder="Search your experiences..."
            aria-label="Search experiences"
          />
        </form>

        <div
          className={`results-dropdown-window ${
            isFilteringActive ? "results-dropdown-window-show" : "results-dropdown-window-hide"
          }`}
          role="listbox"
          aria-label="Search results"
        >
          <ul>
            {filteredResults.length > 0 ? (
              filteredResults.slice(0, 3).map((exp) => (
                <li key={exp.id} role="option">
                  <button
                    onClick={() => handlePage("exp", exp.id)}
                    className="search-result-button"
                  >
                    {exp.title}
                  </button>
                </li>
              ))
            ) : (
              <li role="option">No results found</li>
            )}
          </ul>

          <div className="searcher-tooltip-container">
            {isTooltipShown && (
              <p id="tooltip-text">
                Only the first three results are always shown here.
              </p>
            )}
            <button
              onClick={showTooltips}
              className="tooltip-button"
              aria-describedby="tooltip-text"
            >
              <img src="info-icon.svg" alt="Info" />
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => handlePage("faq")} className="faq-button">
        FAQ
      </button>
    </div>
  );
}
