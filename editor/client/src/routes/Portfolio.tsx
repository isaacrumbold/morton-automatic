import { useEffect, useState } from 'react'
import { Banner } from './components/Banner'
import { ProjectSection } from './components/ProjectSection'
import portfolio_banner from '../assets/images/bg-2.jpg'
import { getJson } from './Editor'
import jsonUrl from '/json/projects.json?url'

export const Portfolio = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getJson(jsonUrl).then((res) => setProjects(res))
    }, [])

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
                {projects.map((project: any) => {
                    return (
                        <ProjectSection
                            key={project.projId}
                            image={`/portfolioImages/${project.projId}/${project.projPicture}`}
                            title={project.projTitle}
                            description={project.projDescription}
                            alt="project image"
                            flipped={
                                projects.indexOf(project as never) % 2 === 0
                            }
                            examples={project.examples}
                        />
                    )
                })}
            </div>
        </div>
    )
}
