import logo from '../assets/logo-round.png'
import { FooterLink } from './FooterLink'
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'

export const Footer = () => {
    return (
        <div className=" mt-full sticky top-[100vh] flex w-full items-center overflow-hidden bg-primary">
            <div className=" max my-5 flex w-full items-center justify-center max-lg:flex-col max-lg:space-y-9 lg:space-x-28">
                <div className="h-fit w-fit">
                    <img
                        src={logo}
                        alt="maeco logo"
                        width={125}
                        className="rounded-md"
                    />
                </div>
                <div className="  flex h-full w-fit flex-col space-y-3 text-white max-lg:text-center">
                    <FooterLink linkTo="/" name="Home" />
                    <FooterLink linkTo="about" name="About" />
                    <FooterLink linkTo="contact" name="Contact" />
                </div>
                <div className=" flex h-full w-fit flex-col space-y-3 text-white max-lg:text-center">
                    <a
                        href="mailto:info@mortonautomatic.com"
                        className="flex items-center hover:underline"
                    >
                        <EnvelopeIcon className="mr-2 h-5" />
                        info@mortonautomatic.com
                    </a>
                    <a
                        href="tel:+13092666330"
                        className="flex items-center hover:underline"
                    >
                        <PhoneIcon className="mr-2 h-5" /> +1 309-266-6330
                    </a>
                    <a
                        href="https://goo.gl/maps/jfhu3pgVxusrsLgL7"
                        target="_blank"
                        className="flex items-center hover:underline"
                    >
                        <MapPinIcon className="mr-2 h-5" />
                        641 W David St.
                        <br />
                        Morton IL, 61550
                    </a>
                </div>
            </div>
        </div>
    )
}
