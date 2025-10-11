import { useState, useEffect } from "react";
import type { Adventure } from '../components/RandomExperiences';
import { randomAdventures } from '../components/RandomExperiences';

interface RandomExperienceProps {
    handlePage: (page: string) => void;
};

export default function RandomExperience(props: RandomExperienceProps) {
    const [adventure, setAdventure] = useState<Adventure | null>(null);
    const [isGenerated, setIsGenerated] = useState(false);
    const [fadeUp, setFadeUp] = useState(false);

    useEffect(() => {
        // Trigger fade-up animation on mount
        setFadeUp(true);
    }, []);

    const handleRandomExperience = () => {
        const randomNum = Math.floor(Math.random() * randomAdventures.length);
        setAdventure(randomAdventures[randomNum]);
        setIsGenerated(true);
    };

    const handleAgain = () => {
        setAdventure(null);
        setIsGenerated(false);
    };

    return (
        <div className="random-page">
            <button onClick={() => props.handlePage("home")} className="random-experience-page-back-button">
                <img src="/next-icon.svg" alt="Back" />
            </button>

            <div className={`random-page-content ${fadeUp ? 'fade-up' : ''}`}>
                <h2 className={`${isGenerated ? "header-hide" : "header-show"}`}>
                    Click the button below to generate a random experience!
                </h2>

                <button onClick={handleRandomExperience} className={`random-button ${isGenerated ? "button-hide" : "button-show"}`}>
                    <img src="/random.svg" alt="Generate" />
                </button>

                {isGenerated && adventure && (
                    <>
                        <span className="generated-experience">{adventure.title}</span>
                        <span className="generated-experience-description">{adventure.description}</span>
                    </>
                )}

                <button onClick={handleAgain} className={`again-button-random-experience-page ${isGenerated ? "button-show" : "button-hide"}`}>
                    Again
                </button>

                <img className="random-page-logo" src="/logo.png" alt="Logo" />
            </div>
        </div>
    );
}
