import { BodyWrapper } from '../components/BodyWrapper'
import { BodyPara } from './components/BodyPara'
import flag_banner from './images/flag_banner.jpg'

export const About = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            <div className="absolute z-20 flex h-[1000px] w-full -translate-y-52 overflow-hidden">
                <img
                    src={flag_banner}
                    alt="home banner"
                    className="w-full translate-y-52 object-cover"
                />
                <div className=" absolute top-[400px] flex h-fit w-full flex-col bg-transparent  text-center  text-white">
                    <h1 className=" text-5xl font-medium leading-tight">
                        Who We Are
                    </h1>
                    <h2 className="text-4xl font-light leading-tight">
                        Innovative solutions and quality custom control builds
                    </h2>
                </div>

                <div className=" absolute bottom-0 flex h-96 w-full translate-y-44 skew-y-2 items-center justify-center bg-white"></div>
            </div>

            <div className="mt-[600px] flex h-fit w-full justify-center">
                <BodyWrapper>
                    <BodyPara
                        title="Our Story"
                        body="Morton Automatic Electric Co is an automation company 
                        specializing in design build electrical and mechanical test systems as 
                        well as custom control panels and cable assemblies. Originally started as a 
                        panel building shop more than 40 years ago, our capabilities have expanded and 
                        allow us to offer a wide variety of solutions to most automation and testing 
                        needs. Let us help you with your next project. Whether it’s a complex test bench 
                        requiring HMIs and application software, or a small control panel to monitor 
                        temperature and control a heater, Morton Automatic is ready to help you with your 
                        next project."
                    />
                    <BodyPara
                        title="How We Engage With
                        Our Customers"
                        body="At Morton Automatic Electric we bring a personal touch to working with our 
                        customers. We strive to bring knowledge and integrity to all our projects both 
                        large and small. As a design/build company we are not limited to what we have 
                        done in the past but we do leverage that experience to improve design ideas. 
                        This allows us to remain flexible in order to offer our customers the best possible product. 
                        Check out this sight to learn more about what we can do for you!"
                    />
                </BodyWrapper>
            </div>
        </div>
    )
}
