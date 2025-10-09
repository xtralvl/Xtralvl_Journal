import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import './styles/App.scss';
import './styles/Searcher.scss';
import './styles/HomePage.scss';
import './styles/SplashScreen.scss';
import './styles/AddExperience.scss';
import './styles/FAQPage.scss';
import './styles/SaveModal.scss';
import './styles/CancelModal.scss';
import './styles/ExperiencesListPage.scss';
import './styles/ExperiencesListPageEmpty.scss';
import './styles/ExperienceListElement.scss';
import './styles/ExperiencePage.scss';
import './styles/DeleteExperienceModal.scss';
import './styles/RandomExperience.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
