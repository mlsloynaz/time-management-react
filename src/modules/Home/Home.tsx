import { Thumbnail } from './components/Thumbnail'

const translations ={
    pageTitle: "Distractions",
    settings:{
       title: "Settings",
       description: "Enter the data to compute"
    },
    dashboard:{
        title: "Dashboard",
        description: "Stats events"
    },
    reports:{
        title: "Reports",
        description: "Insights from  events"
    }
}

export function Home(){
    return(
        <main>
        <header>
             <div>
                <h1>{translations.pageTitle}</h1>
             </div>
        </header>
            <section id="home-thumbnails">
                <Thumbnail title={translations.dashboard.title} description={translations.dashboard.description}/>
                <Thumbnail title={translations.reports.title} description={translations.reports.description}/>
                <Thumbnail title={translations.settings.title} description={translations.settings.description}/>
            </section>
        </main>
       
    )
}