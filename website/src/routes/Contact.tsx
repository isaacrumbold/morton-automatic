import {
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    MapPinIcon,
    BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import Iframe from 'react-iframe'
import { BodyWrapper } from '../components/BodyWrapper'
import contact_bg from './images/bg-1.jpg'
import { ContactCard } from './components/ContactCard'
import { Banner } from './components/Banner'

export const Contact = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center bg-white">
            <Banner
                title1="Contact Us"
                subtitle="Let us be a part of your next project"
                image={contact_bg}
                alt="contact banner"
            />

            <div className="mt-[600px] flex h-fit w-full justify-center">
                <BodyWrapper>
                    <div className="flex w-full justify-center">
                        <div className="my-12 flex flex-col  space-y-12">
                            <div className=" z-30  flex w-fit items-center">
                                <BuildingOffice2Icon className=" mr-4 h-10 text-primary" />
                                <div>
                                    <h1 className="text-2xl font-semibold text-primary">
                                        Business Hours
                                    </h1>
                                    <p className="flex items-center text-lg text-gray-700 decoration-primary decoration-2 hover:underline">
                                        Monday - Friday: 8a.m. - 4p.m. <br />
                                        Saturday - Sunday: Closed
                                    </p>
                                </div>
                            </div>
                            <ContactCard
                                title="Call us"
                                href="tel:+13092666330"
                                hrefTitle="+1 309-266-6330"
                                icon={
                                    <DevicePhoneMobileIcon className=" mr-4 h-10 text-primary" />
                                }
                            />
                            <ContactCard
                                title="Email us"
                                href="mailto:info@mortonautomatic.com"
                                hrefTitle="info@mortonautomatic.com"
                                icon={
                                    <EnvelopeIcon className=" mr-4 h-10 text-primary" />
                                }
                            />
                            <ContactCard
                                title="Location"
                                href="https://goo.gl/maps/jfhu3pgVxusrsLgL7"
                                hrefTitle="641 W. David St."
                                hrefTitle2="Morton, IL 61550"
                                icon={
                                    <MapPinIcon className=" mr-4 h-10 text-primary" />
                                }
                            />
                        </div>
                    </div>
                    <div className="z-20 flex h-full w-full items-center justify-center ">
                        <Iframe
                            className="m-10 h-96 w-96 rounded-3xl "
                            url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.6476373344994!2d-89.4690340896348!3d40.61559730504462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880aff499df15bb9%3A0x25f7ec4a44a32c5!2sMorton%20Automatic%20Electric!5e0!3m2!1sen!2sus!4v1694631812315!5m2!1sen!2sus"'
                        />
                    </div>
                </BodyWrapper>
            </div>
        </div>
    )
}
