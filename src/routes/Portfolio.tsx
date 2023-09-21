import { Banner } from './components/Banner'
import { ProjectSection } from './components/ProjectSection'
import portfolio_banner from './images/bg-2.jpg'
import panel from './images/DSC_4228.jpg'
import tester from './images/IMG_1793.jpg'

export const Portfolio = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            <Banner
                title1="Project Portfolio"
                subtitle="Examples of the quality work we do"
                image={portfolio_banner}
                alt="home banner"
                top={360}
                imageClass="translate-y-52"
            />
            <div className="mt-[600px] flex h-fit w-full flex-col items-center pt-16">
                <ProjectSection
                    image={panel}
                    title="Project 1"
                    description=" Here would be a great place to describe the project.
                            It can be a very long description or it can be
                            short, simple, and to the point. I mean that is the
                            whole point of this part, that YOU can create it,
                            edit it and make it to your liking. So go ahead and
                            enjoy, dream, and create. The sky is the limit..."
                    alt="panel"
                />
                <ProjectSection
                    image={tester}
                    title="Project 2"
                    description=" Here would be a great place to describe the project.
                            It can be a very long description or it can be
                            short, simple, and to the point. I mean that is the
                            whole point of this part, that YOU can create it,
                            edit it and make it to your liking. So go ahead and
                            enjoy, dream, and create. The sky is the limit..."
                    alt="panel"
                    flipped={true}
                />
            </div>
        </div>
    )
}
