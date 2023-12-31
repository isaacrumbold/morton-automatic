import home_banner from './images/home_banner_filtered.jpg'
import { BodyPara } from './components/BodyPara'
import { BodyWrapper } from '../components/BodyWrapper'
import { Banner } from './components/Banner'

export const Home = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            <Banner
                title1="Creating Innovative"
                title2="Solutions Since"
                subtitle="1972"
                image={home_banner}
                alt="home banner"
            />

            <div className="z-20 mt-[550px] flex h-max w-3/4 min-w-mobile max-w-5xl flex-col justify-center rounded-3xl bg-white drop-shadow-xl">
                <div className=" mx-3 my-5">
                    <h1 className="mb-3 text-center text-[28px] font-bold text-primary">
                        Our Vision
                    </h1>
                    <p className="text-center text-xl text-gray-700">
                        Morton Automatic desires to grow our business by
                        treating our customers well and standing by the products
                        we deliver.
                    </p>
                </div>
            </div>
            <div className="flex h-fit w-full justify-center">
                <BodyWrapper>
                    <BodyPara
                        title="What We Do"
                        body="Morton Automatic Electric is an automation company
                            specializing in design build electrical and mechanical
                            test systems as well as custom control panels and cable
                            assemblies."
                    />
                    <BodyPara
                        title="Our Expertise"
                        body="Morton Automatic Electric has more than 50 years of
                        experience building custom control panels, wire harnesses, and
                        testing equipment."
                    />
                </BodyWrapper>
            </div>
        </div>
    )
}
