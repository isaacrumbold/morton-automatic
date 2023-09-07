import home_banner from './images/home_banner_filtered.jpg'
import { Lines } from '../components/Lines'

export const Home = () => {
    return (
        <div className=" flex h-full w-full flex-col items-center bg-white">
            <div className="absolute flex h-full w-full justify-center bg-transparent">
                <Lines />
            </div>

            <div className="absolute flex h-[900px] w-full">
                <img
                    src={home_banner}
                    alt="home banner"
                    className=" w-full -translate-y-36 object-cover"
                />
            </div>
            <div className="z-10 mt-[600px] flex h-96 w-full skew-y-3 items-center justify-center bg-white">
                <Lines />
            </div>
            <div className=" min-w-mobile absolute z-20 mt-[550px] flex h-56 w-3/4 max-w-5xl flex-col justify-center rounded-3xl bg-white drop-shadow-xl">
                <div className=" mx-3">
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
            <div className="min-w-mobile flex w-3/4 max-w-5xl flex-col px-3">
                <h1 className="mb-3 text-center text-[28px] font-bold text-primary">
                    What We Do
                </h1>
                <p className="text-center text-xl text-gray-700">
                    Morton Automatic Electric is an automation company
                    specializing in design build electrical and mechanical test
                    systems as well as custom control panels and cable
                    assemblies.
                </p>
            </div>
        </div>
    )
}
