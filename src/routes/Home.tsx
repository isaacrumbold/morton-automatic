import home_banner from './images/home_banner_filtered.jpg'
import { BodyPara } from './components/BodyPara'
import { BodyWrapper } from '../components/BodyWrapper'
import { Banner } from './components/Banner'

export const Home = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            {/* <div className="absolute z-20 flex h-[1000px] w-full -translate-y-52 overflow-hidden">
                <img
                    src={home_banner}
                    alt="home banner"
                    className="w-full object-cover"
                />
                <div className=" absolute top-[360px] flex h-fit w-full flex-col bg-transparent  text-center  text-white">
                    <h1 className=" text-5xl font-medium leading-tight">
                        Creating Innovative <br /> Solutions Since
                    </h1>
                    <h2 className="text-4xl font-light leading-tight">1972</h2>
                </div>

                <div className=" absolute bottom-0 flex h-96 w-full translate-y-44 skew-y-2 items-center justify-center bg-white"></div>
            </div> */}
            <Banner
                title1="Creating Innovative"
                title2="Solutions Since"
                subtitle="1972"
                image={home_banner}
                alt="home banner"
                top={360}
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
