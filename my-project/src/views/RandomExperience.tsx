import { useState } from "react";

interface RandomExperienceProps {
    handlePage: (page: string) => void;
};

// 🏞️ Random adventures
const randomAdventures: string[] = [
    "Sign up for an ATV ride",
    "Take part in a white-water rafting adventure",
    "Join a Halloween night run",
    "Go on a sunrise hike in the mountains",
    "Try kayaking on a nearby lake",
    "Camp overnight under the stars",
    "Explore a local cave",
    "Go zip-lining through a forest",
    "Take a scenic bike ride along a trail",
    "Go paddleboarding on a river",
    "Attend a small-town autumn festival",
    "Try ice skating outdoors",
    "Take a road trip to a random town",
    "Try to catch a glimpse of a sasquatch in the woods",
    "Go for a spontaneous trail run"
  ];
  
  /* 🛠️ Random skills (commented out for now)
  const randomSkills: string[] = [
    "Learn how to ski",
    "Take a horseback riding lesson",
    "Read about the cryptids of the USA",
    "Try painting with watercolors",
    "Learn basic origami",
    "Practice meditation for 10 minutes",
    "Cook a new recipe you've never tried",
    "Learn a few words in a new language",
    "Try photography in your neighborhood",
    "Practice juggling three balls",
    "Learn a magic trick",
    "Write a short poem",
    "Try knitting or crocheting",
    "Learn basic self-defense moves",
    "Try spotting constellations at night"
  ];
  */

export default function RandomExperience(props: RandomExperienceProps) {

    const [experience, setExperience] = useState<string>("");
    const [isGenerated, setIsGenerated] = useState(false);
    const [_isAdventure, _setIsAdcenture] = useState(false);
    const [_isSkill, _setIsSkill] = useState(false);

    const handleRandomExperience = () => {
        const randomNum = Math.floor(Math.random() * randomAdventures.length);
        setExperience(randomAdventures[randomNum]);
        setIsGenerated(true);
      };

      const handleAgain = () => {
        setIsGenerated(false);
      };


    return (
        <div className="random-page" >
            <button onClick={() => props.handlePage("home")} className="random-experience-page-back-button" ><img src="/next-icon.svg" alt="" /></button>
                <div className="random-page-content">

                <h2 className={`${isGenerated ? "header-hide" : "header-show"}`} >Click the button below to generate a random experience!</h2>
                <button onClick={handleRandomExperience} className={`random-button ${isGenerated ? "button-hide" : "button-show"}`}><img src="/random.svg" alt="" /></button>

                <span className={`${isGenerated ? "generated-experience" : "generated-experience-hide"}`} >{isGenerated ? experience : ""}</span>

                <button onClick={handleAgain} className={`again-button-random-experience-page ${isGenerated ? "button-show" : "button-hide"}`} >Again</button>

                <img className="random-page-logo" src="/logo.png" alt="" />

            </div>
        </div>

    )
}