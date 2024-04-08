import { Thumbnail } from './components/Thumbnail'
import dashboard from 'src/img/dashboard.svg';
import reports from 'src/img/reports.svg';
import settings from 'src/img/settings.svg';


const translations ={
    pageTitle: "Time insights",
    siteDescription: "Empower users with valuable insights into their time management habits, users can take control of their time and achieve greater efficiency in their personal and professional lives.",
    settings:{
       title: "Settings",
       description: "Site settings and set of forms to enter the data to track"
    },
    dashboard:{
        title: "Dashboard",
        description: "An intuitive dashboard that provides a comprehensive overview of time spent on various distractions"
    },
    reports:{
        title: "Reports",
        description: "Generate reports allowing users to identify patterns and make informed decisions to improve their productivity."
    }
}

export function Home(){
    return(
        <main className="flex flex-col h-screen overflow-hidden">
            <header className="flex flex-col justify-center content-center w-full h-60">
                <h1 className="text-6xl p-4">{translations.pageTitle}</h1>
                <p className="text-l md:text-xl p-2 md:p-4">{translations.siteDescription}</p>
            </header>
            <section id="home-thumbnails" className='p-4 flex flex-col flex-1 content-center overflow-y-auto bg-slate-100'>
                <div className='flex flex-wrap  justify-center content-center gap-4  md:gap-16  h-auto md:h-full '>
                    <Thumbnail src={dashboard} pageId="dashboard" title={translations.dashboard.title} description={translations.dashboard.description}/>
                    <Thumbnail src={reports} pageId="reports" title={translations.reports.title} description={translations.reports.description}/>
                    <Thumbnail src={settings} pageId="settings" title={translations.settings.title} description={translations.settings.description}/>
                </div>
            </section>
        </main>
       
    )
}