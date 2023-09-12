import logo from '../assets/logo.jpg'
import { FooterLink } from './FooterLink'

export const Footer = () => {
    return (
        <div className="mt-full flex w-full flex-col items-center overflow-hidden bg-primary">
            <div className=" max my-5 flex w-full items-center justify-center">
                <div className="h-fit w-fit">
                    <img src={logo} alt="maeco logo" width={75} />
                </div>
                <div className="ml-28 flex h-full w-fit flex-col space-y-3 text-white">
                    <FooterLink linkTo="/" name="Home" />
                    <FooterLink linkTo="about" name="About" />
                    <FooterLink linkTo="contact" name="Contact" />
                </div>
                <div className="ml-28 flex h-full w-fit flex-col space-y-3 text-white">
                    <a
                        href="mailto:info@mortonautomatic.com"
                        className="hover:underline"
                    >
                        info@mortonautomatic.com
                    </a>
                    <a href="tel:+13092666330" className="hover:underline">
                        +1 309-266-6330
                    </a>
                    <a
                        href="https://goo.gl/maps/jfhu3pgVxusrsLgL7"
                        target="_blank"
                        className="hover:underline"
                    >
                        {' '}
                        641 W David St.
                        <br />
                        Morton IL, 61550
                    </a>
                </div>
            </div>
        </div>
    )
}
