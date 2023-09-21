import { Banner } from './components/Banner'
import portfolio_banner from './images/bg-2.jpg'
import panel from './images/DSC_4228.jpg'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

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
            <div className="mt-[600px] flex h-fit w-full justify-center">
                <div className="z-20 flex w-full max-w-6xl max-lg:flex-col max-lg:items-center">
                    <div className="m-4 mb-6 h-fit min-w-mobile max-lg:mb-2 max-lg:w-4/6 lg:w-1/2">
                        <img
                            src={panel}
                            alt="panel"
                            className=" w-full rounded-md object-cover"
                        />
                    </div>
                    <div className="mx-4 my-8 flex min-w-mobile flex-col max-lg:my-4 max-lg:w-4/6 lg:w-1/2">
                        <h1 className="mb-3 text-2xl font-bold text-primary">
                            Title Here
                        </h1>
                        <p className=" text-gray-700">
                            Here would be a great place to describe the project.
                            It can be a very long description or it can be
                            short, simple, and to the point. I mean that is the
                            whole point of this part, that YOU can create it,
                            edit it and make it to your liking. So go ahead and
                            enjoy, dream, and create. The sky is the limit...
                        </p>
                        <button
                            className=" group mt-6 w-36 rounded-md border-2 border-primary py-1 text-lg text-primary transition-all duration-500  hover:w-44 hover:cursor-pointer hover:bg-primary hover:text-white"
                            disabled={true}
                        >
                            Learn more
                            <ChevronRightIcon className="ml-2 inline-block h-5 text-primary opacity-0 transition-all delay-200  duration-300 group-hover:text-white group-hover:opacity-100" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
