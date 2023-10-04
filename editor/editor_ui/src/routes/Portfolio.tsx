import { Banner } from './components/Banner'
import { ProjectSection } from './components/ProjectSection'
import portfolio_banner from './images/bg-2.jpg'
// import panel from './images/project_images_1/DSC_4228.jpg'
import tester from './images/project_images_1/IMG_1793.jpg'
import projects from '../../../projects.json'

export const Portfolio = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            <Banner
                title1="Project Portfolio"
                subtitle="Examples of the quality work we do"
                image={portfolio_banner}
                alt="home banner"
                imageClass="translate-y-52"
            />

            <div className="mt-[600px] flex h-fit w-full flex-col items-center pt-16">
                {projects.map((project) => {
                    return (
                        <ProjectSection
                            key={project.projId}
                            image={tester}
                            title={project.projTitle}
                            description={project.projDescription}
                            alt="panel"
                            flipped={projects.indexOf(project) % 2 === 0}
                            examples={project.examples}
                        />
                    )
                })}
            </div>
        </div>
    )
}
