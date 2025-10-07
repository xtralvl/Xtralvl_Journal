interface ExperiencesListPageProps {
    handlePage: (page: string) => void;
  }
  

export default function ExperiencesListPage(props: ExperiencesListPageProps) {

    return (
      <>
        <div className="experienceslist-page">
        <button onClick={() => props.handlePage("home")} className="back-button-experienceslist-page" ><img src="/next-icon.svg" alt="" /></button>
            <div className="experienceslist-page-empty-container" >
                <div className="experienceslist-page-empty-content" >

                    <h1>Nothing to show, yet..</h1>
                    <h2>Let’s log your first experience!</h2>
                    <button onClick={() => props.handlePage("addNew")} className='log-new-experience-button-listpage'>Log New Experience</button>
                        <div className='experienceslist-page-logo-container'>
                            <img className="experienceslist-page-logo" src="/logo.png" alt="" />
                        </div>
                </div>
            </div>

            <div className="experienceslist-page-not-empty-container" >
                <div className="experienceslist-page-not-empty-content" >

                </div>
            </div>
        </div>
      </>
    )
}